"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { submitContact } from "@/app/actions";
import { Button } from "@/components/ui/button";

const initialState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);

  return (
    <form action={action} className="grid gap-4 rounded-lg border border-navy/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-navy dark:text-white">
          Name
          <input name="name" required className="rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-gold dark:border-white/10 dark:bg-navy dark:text-white" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy dark:text-white">
          Email
          <input name="email" type="email" required className="rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-gold dark:border-white/10 dark:bg-navy dark:text-white" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-navy dark:text-white">
          Phone
          <input name="phone" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-gold dark:border-white/10 dark:bg-navy dark:text-white" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy dark:text-white">
          Subject
          <input name="subject" required className="rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-gold dark:border-white/10 dark:bg-navy dark:text-white" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-navy dark:text-white">
        Message
        <textarea name="message" required rows={6} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-gold dark:border-white/10 dark:bg-navy dark:text-white" />
      </label>
      <Button disabled={pending} className="w-full sm:w-fit">
        <Send className="size-4" />
        {pending ? "Sending..." : "Send Message"}
      </Button>
      {state.message && (
        <p className={state.ok ? "text-sm font-semibold text-emerald" : "text-sm font-semibold text-red-600"} role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
