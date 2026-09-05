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
import { LanguageProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="label-xs">404</p>
      <h1 className="mt-6 max-w-lg font-serif text-4xl font-light md:text-6xl">
        Pagina nu a fost găsită
      </h1>
      <p className="mt-6 max-w-sm text-muted-foreground">
        Calea pe care o cauți nu există sau s-a mutat. Poți reveni acasă.
      </p>
      <div className="mt-10">
        <Link to="/" className="label-xs quiet-link">
          ← Înapoi acasă
        </Link>
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="label-xs">Eroare</p>
      <h1 className="mt-6 max-w-lg font-serif text-4xl font-light md:text-6xl">
        Ceva nu a mers bine
      </h1>
      <p className="mt-6 max-w-sm text-muted-foreground">
        Pagina nu a putut fi încărcată. Poți încerca din nou sau reveni acasă.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="label-xs quiet-link"
        >
          Încearcă din nou →
        </button>
        <Link to="/" className="label-xs quiet-link">
          ← Înapoi acasă
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Brîndușa Nicolescu" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Karla:wght@300;400;500&family=Caveat:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
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
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pt-[4.5rem] md:pt-[6rem]">
            {/* Required: nested routes render here. */}
            <Outlet />
          </main>

          <SiteFooter />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

