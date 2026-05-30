"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems: readonly NavItem[];
  linkedInUrl: string;
};

export function Navbar({ navItems, linkedInUrl }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/55 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Gabrielly Santos
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-surface/80 text-foreground"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/55 bg-background/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-xl bg-foreground px-3 py-2 text-center text-sm font-medium text-background"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

