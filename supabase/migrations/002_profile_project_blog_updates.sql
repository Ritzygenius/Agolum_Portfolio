alter table public.profiles add column if not exists calendly_url text;
alter table public.profiles add column if not exists instagram_url text;
alter table public.profiles add column if not exists facebook_url text;
alter table public.profiles add column if not exists linkedin_url text;
alter table public.profiles add column if not exists x_url text;

alter table public.projects add column if not exists video_url text;

insert into storage.buckets (id, name, public) values
  ('profile-images', 'profile-images', true),
  ('project-images', 'project-images', true),
  ('blog-images', 'blog-images', true)
on conflict (id) do nothing;
