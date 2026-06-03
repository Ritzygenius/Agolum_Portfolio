-- =====================================================
-- FIX ALL MISSING COLUMNS
-- Go to: Supabase Dashboard → SQL Editor → New query
-- Paste everything below and click Run
-- Safe to run multiple times (IF NOT EXISTS won't error)
-- =====================================================

-- Projects: video_url (added after initial deploy)
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS video_url text;

-- Profiles: social/contact columns (added after initial deploy)
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS calendly_url text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS instagram_url text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS facebook_url text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS linkedin_url text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS x_url text;

-- Storage buckets (safe to re-run)
INSERT INTO storage.buckets (id, name, public) VALUES
  ('profile-images',  'profile-images',  true),
  ('project-images',  'project-images',  true),
  ('blog-images',     'blog-images',     true),
  ('certificates',    'certificates',    true),
  ('resumes',         'resumes',         true),
  ('testimonials',    'testimonials',    true)
ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- VERIFY: run this to confirm all columns now exist
-- =====================================================
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name IN ('projects', 'profiles')
  AND column_name IN ('video_url', 'calendly_url', 'instagram_url', 'facebook_url', 'linkedin_url', 'x_url')
ORDER BY table_name, column_name;
