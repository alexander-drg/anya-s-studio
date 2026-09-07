CREATE TABLE public.blog_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_slug text NOT NULL,
  name text NOT NULL,
  email text,
  question text NOT NULL,
  answer text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  answered_at timestamptz,
  CONSTRAINT blog_questions_status_check CHECK (status IN ('pending','published','rejected')),
  CONSTRAINT blog_questions_name_len CHECK (char_length(name) BETWEEN 1 AND 80),
  CONSTRAINT blog_questions_question_len CHECK (char_length(question) BETWEEN 10 AND 2000),
  CONSTRAINT blog_questions_email_len CHECK (email IS NULL OR char_length(email) <= 255)
);

CREATE INDEX blog_questions_post_idx ON public.blog_questions (post_slug, status, created_at DESC);

GRANT INSERT ON public.blog_questions TO anon, authenticated;
GRANT ALL ON public.blog_questions TO service_role;

ALTER TABLE public.blog_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a pending question"
ON public.blog_questions FOR INSERT
TO anon, authenticated
WITH CHECK (status = 'pending' AND answer IS NULL);

CREATE VIEW public.blog_questions_public
WITH (security_invoker = false) AS
SELECT id, post_slug, name, question, answer, created_at, answered_at
FROM public.blog_questions
WHERE status = 'published' AND answer IS NOT NULL;

GRANT SELECT ON public.blog_questions_public TO anon, authenticated;