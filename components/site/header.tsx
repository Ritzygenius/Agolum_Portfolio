"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  ["About", "/about"],
  ["Achievements", "/achievements"],
  ["Projects", "/projects"],
  ["Services", "/services"],
  ["Certifications", "/certifications"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/88 backdrop-blur-xl dark:border-white/10 dark:bg-navy/88">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-3" aria-label="Home">
          <span className="grid size-11 place-items-center rounded-md bg-navy text-base font-black text-gold dark:bg-gold dark:text-navy">
            CI
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black text-navy dark:text-white">Chinagolum Igwe</span>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Technology Leadership</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-navy/5 hover:text-navy dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
                pathname === href && "bg-navy/5 text-navy dark:bg-white/10 dark:text-white",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid size-11 place-items-center rounded-md border border-navy/10 text-navy transition hover:border-gold dark:border-white/10 dark:text-white"
          >
            <Sun className="hidden size-5 dark:block" />
            <Moon className="size-5 dark:hidden" />
          </button>
          <Button href="/contact">Book Consultation</Button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-md border border-navy/10 text-navy lg:hidden dark:border-white/10 dark:text-white"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-white px-5 py-4 shadow-xl lg:hidden dark:border-white/10 dark:bg-navy">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-navy/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full">
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
