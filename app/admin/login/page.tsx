import { Lock } from "lucide-react";
import { signIn } from "@/app/actions";
import { Button } from "@/components/ui/button";

export default async function LoginPage({ searchParams }: { searchParams?: Promise<{ error?: string }> }) {
  const params = await searchParams;
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 py-20">
      <form action={signIn} className="w-full max-w-md rounded-2xl border border-navy/10 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-white/5">
        <Lock className="size-10 text-gold" />
        <h1 className="mt-5 text-3xl font-black text-navy dark:text-white">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Secure content management for the portfolio platform.</p>
        <label className="mt-6 grid gap-2 text-sm font-bold">
          Email
          <input name="email" type="email" required className="rounded-md border border-slate-200 px-4 py-3 dark:border-white/10 dark:bg-navy" />
        </label>
        <label className="mt-4 grid gap-2 text-sm font-bold">
          Password
          <input name="password" type="password" required className="rounded-md border border-slate-200 px-4 py-3 dark:border-white/10 dark:bg-navy" />
        </label>
        {params?.error && <p className="mt-4 text-sm font-semibold text-red-600">{params.error}</p>}
        <Button className="mt-6 w-full">Sign In</Button>
      </form>
    </section>
  );
}
