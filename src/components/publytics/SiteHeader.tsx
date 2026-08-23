import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "AI & Trust", href: "#ai" },
  { label: "Insights", href: "#insights" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled ? "border-border bg-background/95 backdrop-blur-xl" : "border-transparent bg-background/80"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" aria-label="Publytics home"><Logo /></a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-ink-muted transition-colors hover:text-foreground">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="action-primary px-4 py-2.5">Request a briefing</a>
          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center border border-border bg-surface" aria-label="Open navigation"><Menu className="h-5 w-5" /></summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 mt-3 w-64 border border-border bg-background p-3 shadow-lg">
              {NAV.map((item) => <a key={item.href} href={item.href} className="block px-3 py-3 text-sm font-medium hover:bg-surface">{item.label}</a>)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}