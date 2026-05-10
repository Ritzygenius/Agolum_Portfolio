import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("px-5 py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-gold">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-black tracking-tight text-navy sm:text-5xl dark:text-white">{title}</h2>}
            {description && <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
