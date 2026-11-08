"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-head">
      <a className="brand" href="#top">
        {profile.shortName}
        <span className="brand-dot">.</span>
      </a>
      <nav className={open ? "nav open" : "nav"} aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <span className="head-loc">Dhaka, BD</span>
      <button
        className="burger"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>
    </header>
  );
}
