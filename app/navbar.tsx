"use client";
import { useState } from "react";
import { profile } from "./data";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#builds", label: "Daily builds" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-neutral-950/90 text-white backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main"
      >
        <a href="#top" className="font-display text-xl font-extrabold">
          {profile.short} Shabbir Rajput
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-80">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 font-bold text-neutral-950 transition hover:opacity-80"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-white px-4 py-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/20 px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {[...links, { href: "#contact", label: "Contact" }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-1 hover:opacity-80"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
