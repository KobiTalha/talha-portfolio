import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="site-foot">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="foot-mid">Built with Next.js, TypeScript & Tailwind CSS</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
