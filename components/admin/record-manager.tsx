"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { deleteAdminRecord, deleteProjectImage, upsertAdminRecord } from "@/app/actions";
import { Button } from "@/components/ui/button";
import type { BlogPost, Profile, Project } from "@/types/content";

export type AdminField = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "date" | "url" | "checkbox" | "file";
  placeholder?: string;
};

type RecordValue = string | boolean | string[] | null | undefined;
type AdminRecord = (Partial<Project> | Partial<BlogPost> | Partial<Profile>) & { id?: string };

type UploadConfig = {
  bucket: string;
  fileField: string;
  targetField: string;
  galleryBucket?: string;
};

export function RecordManager({
  table,
  titleField,
  fields,
  records,
  upload,
}: {
  table: string;
  titleField: string;
  fields: AdminField[];
  records: AdminRecord[];
  upload?: UploadConfig;
}) {
  const router = useRouter();
  const [editing, setEditing] = useState<AdminRecord | null>(null);
  const [pending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);
  const normalized = useMemo(() => records, [records]);

  function valueFor(field: AdminField) {
    const value = editing?.[field.name as keyof AdminRecord] as RecordValue;
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "boolean") return value;
    return value || "";
  }

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_.75fr]">
      <form
        className="grid gap-4 rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
        key={editing?.id || "new-record"}
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.currentTarget;
          const formData = new FormData(form);
          if (editing?.id) formData.set("id", editing.id);
          if (upload) {
            formData.set("_upload_bucket", upload.bucket);
            formData.set("_upload_field", upload.fileField);
            formData.set("_upload_target", upload.targetField);
            if (upload.galleryBucket) formData.set("_gallery_bucket", upload.galleryBucket);
          }
          startTransition(async () => {
            try {
              await upsertAdminRecord(table, formData);
              setFeedback({ ok: true, msg: editing?.id ? "Record updated." : "Record created." });
              setEditing(null);
              form.reset();
              router.refresh();
            } catch (e: any) {
              setFeedback({ ok: false, msg: e?.message || "Save failed. Check console or RLS/bucket permissions." });
            }
          });
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-black text-navy dark:text-white">{editing?.id ? "Edit Record" : "Create Record"}</h2>
          <button type="button" onClick={() => { setEditing(null); setFeedback(null); }} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-bold text-navy hover:bg-navy/5 dark:text-white dark:hover:bg-white/10">
            <Plus className="size-4" /> New
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <label
              key={field.name}
              className={
                field.type === "textarea" || field.type === "file"
                  ? "grid min-w-0 gap-2 md:col-span-2"
                  : "grid min-w-0 gap-2"
              }
            >
              <span className="text-sm font-bold text-navy dark:text-white">{field.label}</span>
              {field.type === "textarea" ? (
                <textarea name={field.name} rows={5} defaultValue={String(valueFor(field))} placeholder={field.placeholder} className="w-full rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-gold dark:border-white/10 dark:bg-navy" />
              ) : field.type === "checkbox" ? (
                <>
                  <input type="hidden" name={field.name} value="off" />
                  <input name={field.name} type="checkbox" defaultChecked={Boolean(valueFor(field))} className="size-5 accent-emerald" />
                </>
              ) : field.type === "file" ? (
                <div className="grid gap-1">
                  <input name={field.name} type="file" multiple={field.name === "gallery_files"} accept="image/*" className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none file:mr-4 file:rounded-md file:border-0 file:bg-navy file:px-3 file:py-2 file:text-white focus:border-gold dark:border-white/10 dark:bg-navy" />
                  {field.name === "gallery_files" && (
                    <p className="text-xs text-slate-500 dark:text-slate-400">Hold Ctrl (or Cmd on Mac) to select up to 5 images at once</p>
                  )}
                </div>
              ) : (
                <input name={field.name} type={field.type || "text"} defaultValue={String(valueFor(field))} placeholder={field.placeholder} className="w-full min-w-0 rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-gold dark:border-white/10 dark:bg-navy" />
              )}
            </label>
          ))}
        </div>
        <Button disabled={pending} className="w-fit">{pending ? "Saving..." : editing?.id ? "Update Record" : "Create Record"}</Button>
        {feedback && (
          <p className={`text-sm font-semibold ${feedback.ok ? "text-emerald" : "text-red-600"}`}>{feedback.msg}</p>
        )}
      </form>

      <div className="grid content-start gap-3">
        {normalized.map((record) => (
          <div key={record.id || String(record[titleField as keyof AdminRecord])} className="rounded-md border border-navy/10 bg-white p-4 text-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-black text-navy dark:text-white">{String(record[titleField as keyof AdminRecord] || "Untitled")}</p>
                {"slug" in record && record.slug ? <p className="mt-1 text-xs text-slate-500">{record.slug}</p> : null}
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => { setEditing(record); setFeedback(null); }} aria-label="Edit" className="grid size-9 place-items-center rounded-md border border-navy/10 text-navy hover:border-gold dark:border-white/10 dark:text-white">
                  <Pencil className="size-4" />
                </button>
                {record.id ? (
                  <button type="button" onClick={() => startTransition(async () => { await deleteAdminRecord(table, record.id!); router.refresh(); })} aria-label="Delete" className="grid size-9 place-items-center rounded-md border border-red-200 text-red-600 hover:bg-red-50 dark:border-red-400/30 dark:hover:bg-red-400/10">
                    <Trash2 className="size-4" />
                  </button>
                ) : null}
              </div>
            </div>
            {"project_images" in record && Array.isArray(record.project_images) && record.project_images.length ? (
              <div className="mt-4 grid gap-2">
                {record.project_images.map((image) => (
                  <div key={image.id || image.image_url} className="flex items-center justify-between gap-2 rounded-md bg-slate-50 px-3 py-2 dark:bg-white/5">
                    <span className="truncate text-xs text-slate-500">{image.image_url}</span>
                    {image.id ? <button type="button" onClick={() => startTransition(async () => { await deleteProjectImage(image.id!); router.refresh(); })} className="text-xs font-bold text-red-600">Delete</button> : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
