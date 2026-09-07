import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import type { Database } from "@/integrations/supabase/types";

const submissionSchema = z.object({
  postSlug: z
    .string()
    .trim()
    .min(1)
    .max(120)
    .regex(/^[a-z0-9-]+$/i, "Articol invalid."),
  name: z.string().trim().min(2, "Numele este prea scurt.").max(80),
  email: z
    .string()
    .trim()
    .max(255)
    .email("Adresa de email nu pare validă.")
    .optional()
    .or(z.literal("")),
  question: z
    .string()
    .trim()
    .min(10, "Scrie te rog câteva cuvinte în plus.")
    .max(2000, "Întrebarea este prea lungă."),
  /** Câmp-capcană: completat doar de roboți. */
  website: z.string().max(0).optional().or(z.literal("")),
  /** Milisecunde de la deschiderea formularului — trimiterile instantanee sunt spam. */
  elapsedMs: z.number().int().nonnegative(),
});

const LINK_PATTERN = /(https?:\/\/|www\.|\[url=|<a\s)/i;

function serverClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const submitQuestion = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => submissionSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: false as const, error: "Trimitere respinsă." };
    if (data.elapsedMs < 3000) {
      return { ok: false as const, error: "Mai stai o clipă și încearcă din nou." };
    }
    if (LINK_PATTERN.test(data.question) || LINK_PATTERN.test(data.name)) {
      return { ok: false as const, error: "Te rog scrie întrebarea fără linkuri." };
    }

    const supabase = serverClient();
    const { error } = await supabase.from("blog_questions").insert({
      post_slug: data.postSlug,
      name: data.name,
      email: data.email ? data.email : null,
      question: data.question,
      status: "pending",
    });

    if (error) {
      console.error("blog question insert failed", error.message);
      return { ok: false as const, error: "Nu am putut trimite întrebarea. Încearcă din nou." };
    }
    return { ok: true as const };
  });
