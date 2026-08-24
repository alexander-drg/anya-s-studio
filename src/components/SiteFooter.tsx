import { ARTIST_NAME } from "@/content/site";
import { HandLine } from "@/components/Marks";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[110rem] px-6 pb-14 md:px-12">
      <HandLine className="mb-10 h-3 w-full text-border" />
      <div className="label-xs flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="quiet-link hover:text-foreground"
          >
            Instagram
          </a>
          <a href="mailto:hello@example.com" className="quiet-link hover:text-foreground">
            hello@example.com
          </a>
          <span>București, RO</span>
        </div>
        <p>
          © {new Date().getFullYear()} {ARTIST_NAME}
        </p>
      </div>
    </footer>
  );
}
