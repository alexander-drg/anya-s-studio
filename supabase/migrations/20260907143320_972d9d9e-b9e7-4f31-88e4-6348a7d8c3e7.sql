DROP VIEW public.blog_questions_public;

GRANT SELECT (id, post_slug, name, question, answer, created_at, answered_at)
ON public.blog_questions TO anon, authenticated;

CREATE POLICY "Anyone can read published answered questions"
ON public.blog_questions FOR SELECT
TO anon, authenticated
USING (status = 'published' AND answer IS NOT NULL);

CREATE VIEW public.blog_questions_public
WITH (security_invoker = true) AS
SELECT id, post_slug, name, question, answer, created_at, answered_at
FROM public.blog_questions
WHERE status = 'published' AND answer IS NOT NULL;

GRANT SELECT ON public.blog_questions_public TO anon, authenticated;