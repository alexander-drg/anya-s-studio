import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ContinuousLine } from "@/components/ContinuousLine";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Brîndușa Nicolescu" },
      {
        name: "description",
        content:
          "Scrie-i Brîndușei Nicolescu: Desen Fractal, terapie craniosacrală sau orice altă întrebare. Trieste, Italia și București, România.",
      },
      { property: "og:title", content: "Contact — Brîndușa Nicolescu" },
      {
        property: "og:description",
        content: "Dacă simți că vrei să afli mai mult, putem începe de aici.",
      },
    ],
  }),
  component: Contact,
});

const subjects = ["Desen Fractal", "Terapie Craniosacrală", "Altceva"];

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0]!, message: "" });

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    `${form.subject} — ${form.name || "mesaj de pe site"}`,
  )}&body=${encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)}`;

  return (
    <div className="mx-auto max-w-[110rem] px-6 pb-32 md:px-12">
      <section className="grid gap-16 py-14 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-5">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-[4.2rem]">
            Contact
          </h1>
          <p className="mt-8 max-w-md font-serif text-xl leading-relaxed font-light">
            Dacă simți că vrei să afli mai mult, putem începe de aici.
          </p>

          <div className="mt-14 space-y-6">
            <div>
              <p className="label-xs">Brîndușa Nicolescu</p>
              {contact.locations.map((l) => (
                <p key={l} className="mt-1">
                  {l}
                </p>
              ))}
            </div>
            <div>
              <a href={`mailto:${contact.email}`} className="quiet-link block">
                {contact.email}
              </a>
              {contact.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="quiet-link mt-1 block"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          <ContinuousLine className="mt-14 h-6 w-full text-[var(--color-terracotta)]" />
        </Reveal>

        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <form
            className="space-y-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              window.location.href = mailto;
            }}
          >
            <Field
              label="Nume"
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
            />
            <div>
              <span className="label-xs">Subiect</span>
              <div className="mt-3 flex flex-wrap gap-6">
                {subjects.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, subject: s }))}
                    className={`quiet-link text-sm ${form.subject === s ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="label-xs" htmlFor="mesaj">
                Mesaj
              </label>
              <textarea
                id="mesaj"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-3 w-full border-0 border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
              />
            </div>
            <button type="submit" className="label-xs quiet-link">
              Trimite mesajul →
            </button>
            {sent && (
              <p className="text-muted-foreground">
                Se deschide aplicația de email. Dacă nu se întâmplă, scrie direct la{" "}
                {contact.email}.
              </p>
            )}
          </form>
        </Reveal>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  const id = label.toLowerCase();
  return (
    <div>
      <label className="label-xs" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-0 border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
      />
    </div>
  );
}
