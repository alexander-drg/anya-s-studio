import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { supabase } from "@/integrations/supabase/client";
import { submitQuestion } from "@/lib/qa.functions";

type PublicQuestion = {
  id: string;
  name: string;
  question: string;
  answer: string | null;
  created_at: string;
};

/**
 * Secțiunea publică de întrebări și răspunsuri de sub un articol.
 * Întrebările noi rămân în așteptare; apar aici doar după ce Brîndușa
 * scrie un răspuns și le publică.
 */
export function QuestionSection({ postSlug }: { postSlug: string }) {
  const send = useServerFn(submitQuestion);
  const openedAt = useRef(Date.now());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  const { data: entries = [] } = useQuery({
    queryKey: ["blog-questions", postSlug],
    queryFn: async () => {
      const { data, error: err } = await supabase
        .from("blog_questions_public")
        .select("id, name, question, answer, created_at")
        .eq("post_slug", postSlug)
        .order("created_at", { ascending: true });
      if (err) throw err;
      return (data ?? []) as PublicQuestion[];
    },
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setState("sending");
    try {
      const result = await send({
        data: {
          postSlug,
          name: name.trim(),
          email: email.trim(),
          question: question.trim(),
          website,
          elapsedMs: Date.now() - openedAt.current,
        },
      });
      if (!result.ok) {
        setError(result.error);
        setState("idle");
        return;
      }
      setState("sent");
      setName("");
      setEmail("");
      setQuestion("");
    } catch {
      setError("Ceva nu a mers. Te rog încearcă din nou.");
      setState("idle");
    }
  }

  return (
    <section className="border-t border-border pt-16 md:pt-24">
      <Reveal className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-serif text-3xl leading-tight font-light md:text-4xl">
            Ai o întrebare?
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Scrie-mi. Citesc fiecare întrebare și, când răspund, o public aici — fără adresa ta de
            email, care rămâne doar la mine.
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          {state === "sent" ? (
            <p className="font-serif text-2xl leading-relaxed font-light">
              Mulțumesc. Am primit întrebarea ta — îți răspund și, dacă răspunsul poate fi de folos
              și altora, îl public aici.
            </p>
          ) : (
            <form className="space-y-8" onSubmit={onSubmit}>
              <div>
                <label className="label-xs" htmlFor="qa-nume">
                  Nume
                </label>
                <input
                  id="qa-nume"
                  required
                  maxLength={80}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-3 w-full border-0 border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
                />
              </div>
              <div>
                <label className="label-xs" htmlFor="qa-email">
                  Email (opțional, nu apare public)
                </label>
                <input
                  id="qa-email"
                  type="email"
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-3 w-full border-0 border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
                />
              </div>
              <div>
                <label className="label-xs" htmlFor="qa-intrebare">
                  Întrebarea ta
                </label>
                <textarea
                  id="qa-intrebare"
                  rows={4}
                  required
                  minLength={10}
                  maxLength={2000}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="mt-3 w-full border-0 border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
                />
              </div>

              {/* câmp-capcană pentru roboți */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="qa-website">Website</label>
                <input
                  id="qa-website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <button type="submit" disabled={state === "sending"} className="label-xs quiet-link">
                {state === "sending" ? "Se trimite…" : "Trimite întrebarea →"}
              </button>
              {error && <p className="text-sm text-muted-foreground">{error}</p>}
              <p className="text-sm text-muted-foreground">
                Întrebările apar aici doar după ce le citesc și răspund.
              </p>
            </form>
          )}
        </div>
      </Reveal>

      {entries.length > 0 && (
        <div className="mt-24 space-y-16 md:mt-32 md:space-y-24">
          {entries.map((entry) => (
            <Reveal key={entry.id} className="grid gap-6 md:grid-cols-12">
              <p className="label-xs md:col-span-3">{entry.name}</p>
              <div className="md:col-span-7 md:col-start-5">
                <p className="font-serif text-2xl leading-relaxed font-light md:text-3xl">
                  {entry.question}
                </p>
                {entry.answer && (
                  <p className="mt-8 border-l border-[var(--color-terracotta)] pl-6 text-muted-foreground">
                    {entry.answer}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
