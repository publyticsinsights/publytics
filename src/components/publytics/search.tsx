import { useNavigate } from "@tanstack/react-router";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Command as Cmdk } from "cmdk";
import { CornerDownLeft, Search } from "lucide-react";
import { SEARCH_INDEX } from "@/content/nav";

/** Predictable ranking: every word must appear; a label match outranks a match in the description. */
function rank(_value: string, search: string, keywords?: string[]): number {
  const words = search.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return 1;
  const label = (keywords?.[0] ?? "").toLowerCase();
  const all = (keywords ?? []).join(" ").toLowerCase();
  if (!words.every((w) => all.includes(w))) return 0;
  return words.every((w) => label.includes(w)) ? 1 : 0.5;
}

/* ─────────────────────────────────────────────────────────────
   Search — a command palette over every page on the site.
   Opens with the header button, ⌘K / Ctrl+K, or "/".
   ───────────────────────────────────────────────────────────── */
export default function SearchPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const navigate = useNavigate();
  const groups = [...new Set(SEARCH_INDEX.map((i) => i.group))];
  const go = (href: string) => {
    onOpenChange(false);
    const [path, hash] = href.split("#");
    navigate({ to: path || "/", ...(hash ? { hash } : {}) });
  };
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[80] bg-ink/55 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-[12vh] z-[81] w-[min(40rem,calc(100vw-2rem))] -translate-x-1/2 border border-line bg-surface shadow-[0_40px_120px_-40px_rgba(20,22,28,.6)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.98]">
          <DialogPrimitive.Title className="sr-only">Search Publytics</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Search every page, institution, product, service and evidence item.
          </DialogPrimitive.Description>
          <Cmdk label="Search the site" loop filter={rank}>
            <div className="flex items-center gap-3 border-b border-line px-5">
              <Search className="h-4 w-4 shrink-0 text-steel" strokeWidth={1.5} />
              <Cmdk.Input
                autoFocus
                placeholder="Search institutions, products, services, evidence…"
                className="h-14 w-full bg-transparent text-[1rem] text-ink outline-none placeholder:text-silver"
              />
              <kbd className="t-label shrink-0 border border-line px-1.5 py-0.5 text-steel">
                Esc
              </kbd>
            </div>
            <Cmdk.List className="max-h-[min(60vh,28rem)] overflow-y-auto p-2">
              <Cmdk.Empty className="px-4 py-10 text-center text-[0.9375rem] text-steel">
                Nothing matches. Try “DPDP”, “ward”, “tracker” or “briefing”.
              </Cmdk.Empty>
              {groups.map((g) => (
                <Cmdk.Group
                  key={g}
                  heading={g}
                  className="[&_[cmdk-group-heading]]:t-label [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-4 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:text-steel"
                >
                  {SEARCH_INDEX.filter((i) => i.group === g).map((i) => (
                    <Cmdk.Item
                      key={`${g}-${i.href}-${i.label}`}
                      value={`${g}:${i.label}:${i.href}`}
                      keywords={[i.label, i.hint ?? "", g, i.keywords ?? ""]}
                      onSelect={() => go(i.href)}
                      className="group flex cursor-pointer items-center justify-between gap-4 px-3 py-2.5 text-ink data-[selected=true]:bg-tint"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-[0.9375rem]">{i.label}</span>
                        {i.hint && (
                          <span className="t-micro block truncate text-steel">{i.hint}</span>
                        )}
                      </span>
                      <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-steel opacity-0 group-data-[selected=true]:opacity-100" />
                    </Cmdk.Item>
                  ))}
                </Cmdk.Group>
              ))}
            </Cmdk.List>
          </Cmdk>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
