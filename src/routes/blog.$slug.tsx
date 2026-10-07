import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ContinuousLine } from "@/components/ContinuousLine";
import { QuestionSection } from "@/components/QuestionSection";
import { Reveal } from "@/components/Reveal";
import { findPost } from "@/content/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Text"} — Brîndușa Nicolescu` },
      { name: "description", content: loaderData?.excerpt ?? "Însemnare de pe blog." },
      { property: "og:type", content: "article" },
      { property: "og:title", content: loaderData?.title ?? "Text" },
      { property: "og:description", content: loaderData?.excerpt ?? "Însemnare de pe blog." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  errorComponent: () => (
    <div className="mx-auto max-w-[110rem] px-6 py-20 md:px-12">
      <p className="font-serif text-3xl font-light">Textul nu a putut fi încărcat.</p>
      <Link to="/blog" className="label-xs quiet-link mt-8 inline-block">
        ← Înapoi la blog
      </Link>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-[110rem] px-6 py-20 md:px-12">
      <p className="font-serif text-3xl font-light">Textul acesta nu există (încă).</p>
      <Link to="/blog" className="label-xs quiet-link mt-8 inline-block">
        ← Înapoi la blog
      </Link>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();

  return (
    <div className="page-shell pb-20">
      <article className="grid gap-8 py-10 md:grid-cols-12 md:py-14">
        <Reveal className="md:col-span-3">
          <p className="label-xs">{post.date}</p>
          <Link to="/blog" className="label-xs quiet-link mt-8 inline-block">
            ← Blog
          </Link>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <h1 className="font-serif text-[2.4rem] leading-[1.1] font-light md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-7 space-y-5 text-lg leading-relaxed">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </article>

      <Reveal>
        <ContinuousLine className="mb-12 h-6 w-full text-[var(--color-terracotta)]" />
      </Reveal>

      <QuestionSection postSlug={post.slug} />
    </div>
  );
}
