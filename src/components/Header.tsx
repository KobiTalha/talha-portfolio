import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-head">
      <a className="brand" href="#top">
        {profile.shortName}
        <span className="brand-dot">.</span>
      </a>
      <nav className="nav" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <span className="head-loc">Dhaka, BD</span>
    </header>
  );
}
