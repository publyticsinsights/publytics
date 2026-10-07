import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const SITEMAP: [string, string][] = [
  ["Public Proof", "/public-proof"],
  ["Solutions", "/solutions"],
  ["Products", "/products"],
  ["Services & Programmes", "/services"],
  ["How to engage", "/engage"],
  ["DPDP 2027", "/dpdp"],
  ["Evidence", "/evidence"],
  ["Trust", "/trust"],
  ["Company", "/company"],
];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <div className="shell flex flex-1 flex-col justify-center py-24">
        <p className="t-label text-steel">Error 404</p>
        <h1 className="t-display-xl mt-6 max-w-3xl">This page has moved, or never existed.</h1>
        <p className="t-lead mt-7 max-w-lg text-graphite">
          Here is the sitemap, and here is how to reach a person.
        </p>

        <nav
          aria-label="Sitemap"
          className="mt-14 grid max-w-4xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {SITEMAP.map(([label, href]) => (
            <Link
              key={label}
              to={href}
              className="bg-paper px-5 py-5 text-[0.9375rem] text-graphite transition-colors hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-solid">
            Return to the homepage
          </Link>
          <Link to="/company" hash="contact" className="btn btn-outline">
            Reach a person
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <div className="shell flex flex-1 flex-col justify-center py-24">
        <p className="t-label text-steel">Something went wrong</p>
        <h1 className="t-display mt-6 max-w-2xl">This page did not load.</h1>
        <p className="t-lead mt-6 max-w-lg text-graphite">
          The fault is on our side, not yours. You can try again, or reach a person directly.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn btn-solid"
          >
            Try again
          </button>
          <a href="/" className="btn btn-outline">
            Return to the homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Publytics — Public Proof" },
      {
        name: "description",
        content:
          "Publytics builds the data and AI infrastructure that public institutions run on — the layer between government, the people it serves, and the organisations that work alongside both.",
      },
      { name: "author", content: "Publytics" },
      { property: "og:site_name", content: "Publytics" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1B1E26" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      // Fonts are self-hosted (src/fonts.css): no third-party requests.
      {
        rel: "preload",
        href: "/fonts/inter-latin-567244.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/newsreader-latin-roman.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/newsreader-latin-italic.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
