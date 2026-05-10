import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
};

const variants = {
  primary: "bg-gold text-navy shadow-lg shadow-gold/20 hover:bg-[#c49f2d]",
  secondary: "bg-emerald text-white shadow-lg shadow-emerald/20 hover:bg-[#0ea371]",
  ghost: "text-navy hover:bg-navy/5 dark:text-white dark:hover:bg-white/10",
  outline: "border border-navy/15 bg-white text-navy hover:border-gold hover:text-navy dark:border-white/15 dark:bg-white/5 dark:text-white",
};

export function Button({ href, className, variant = "primary", ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
