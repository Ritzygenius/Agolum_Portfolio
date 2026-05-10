"use client";

import { useTransition } from "react";
import { upsertAdminRecord } from "@/app/actions";
import { Button } from "@/components/ui/button";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "date" | "url" | "checkbox";
  placeholder?: string;
};

export function CrudForm({ table, fields }: { table: string; fields: Field[] }) {
  const [pending, startTransition] = useTransition();

  return (
    <form
      className="grid gap-4 rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(async () => upsertAdminRecord(table, formData));
        event.currentTarget.reset();
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className={field.type === "textarea" ? "grid gap-2 md:col-span-2" : "grid gap-2"}>
            <span className="text-sm font-bold text-navy dark:text-white">{field.label}</span>
            {field.type === "textarea" ? (
              <textarea name={field.name} rows={4} placeholder={field.placeholder} className="rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-gold dark:border-white/10 dark:bg-navy" />
            ) : field.type === "checkbox" ? (
              <input name={field.name} type="checkbox" className="size-5 accent-emerald" />
            ) : (
              <input name={field.name} type={field.type || "text"} placeholder={field.placeholder} className="rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-gold dark:border-white/10 dark:bg-navy" />
            )}
          </label>
        ))}
      </div>
      <Button disabled={pending} className="w-fit">{pending ? "Saving..." : "Create Record"}</Button>
    </form>
  );
}
