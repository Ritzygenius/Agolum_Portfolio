create extension if not exists "pgcrypto";

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  full_name text not null,
  professional_title text,
  tagline text,
  summary text,
  nationality text,
  location text,
  email text,
  phone text,
  whatsapp_number text,
  portrait_url text,
  cv_url text,
  calendly_url text,
  instagram_url text,
  facebook_url text,
  linkedin_url text,
  x_url text
);

create table public.admin_users (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  auth_user_id uuid references auth.users(id) on delete cascade,
  email text not null unique
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where auth_user_id = auth.uid()
       or lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  title text not null,
  slug text not null unique,
  short_description text,
  full_description text,
  challenge text,
  solution text,
  results text,
  technologies text[] default '{}',
  client_name text,
  industry text,
  category text,
  live_url text,
  github_url text,
  video_url text,
  featured boolean default false,
  published boolean default true,
  completed_at date,
  thumbnail_url text
);

create table public.project_images (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  project_id uuid references public.projects(id) on delete cascade,
  image_url text not null,
  alt text,
  sort_order int default 0
);

create table public.achievements (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  title text not null,
  organization text,
  description text,
  icon text,
  year text,
  sort_order int default 0,
  published boolean default true
);

create table public.certifications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  issuer text,
  date date,
  description text,
  certificate_url text,
  sort_order int default 0,
  published boolean default true
);

create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  quote text not null,
  name text not null,
  role text,
  company text,
  photo_url text,
  sort_order int default 0,
  published boolean default true
);

create table public.services (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  title text not null,
  slug text not null unique,
  description text,
  outcomes text[] default '{}',
  icon text,
  sort_order int default 0,
  published boolean default true
);

create table public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null unique,
  slug text not null unique
);

create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  category text,
  tags text[] default '{}',
  featured_image_url text,
  published_at date,
  published boolean default false
);

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  is_read boolean default false
);

create table public.site_settings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  site_title text,
  tagline text,
  email text,
  phone text,
  whatsapp_number text,
  address text,
  cv_url text,
  hero_image_url text
);

create table public.social_links (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  label text not null,
  url text not null,
  icon text,
  sort_order int default 0,
  published boolean default true
);

alter table public.profiles enable row level security;
alter table public.admin_users enable row level security;
alter table public.projects enable row level security;
alter table public.project_images enable row level security;
alter table public.achievements enable row level security;
alter table public.certifications enable row level security;
alter table public.testimonials enable row level security;
alter table public.services enable row level security;
alter table public.blog_categories enable row level security;
alter table public.blog_posts enable row level security;
alter table public.contact_messages enable row level security;
alter table public.site_settings enable row level security;
alter table public.social_links enable row level security;

create policy "Public can read published projects" on public.projects for select using (published = true);
create policy "Public can read published achievements" on public.achievements for select using (published = true);
create policy "Public can read published certifications" on public.certifications for select using (published = true);
create policy "Public can read published testimonials" on public.testimonials for select using (published = true);
create policy "Public can read published services" on public.services for select using (published = true);
create policy "Public can read published posts" on public.blog_posts for select using (published = true);
create policy "Public can read settings" on public.site_settings for select using (true);
create policy "Public can read social links" on public.social_links for select using (published = true);
create policy "Anyone can create contact messages" on public.contact_messages for insert with check (true);
create policy "Admins can read admin users" on public.admin_users for select using (public.is_admin());

create policy "Admins can manage projects" on public.projects for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage project images" on public.project_images for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage achievements" on public.achievements for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage certifications" on public.certifications for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage testimonials" on public.testimonials for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage services" on public.services for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage blog" on public.blog_posts for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage categories" on public.blog_categories for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage messages" on public.contact_messages for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage settings" on public.site_settings for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage profiles" on public.profiles for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage socials" on public.social_links for all using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id, name, public) values
  ('profile-images', 'profile-images', true),
  ('project-images', 'project-images', true),
  ('blog-images', 'blog-images', true),
  ('certificates', 'certificates', true),
  ('resumes', 'resumes', true),
  ('testimonials', 'testimonials', true)
on conflict (id) do nothing;

create policy "Public can read portfolio storage" on storage.objects
for select using (bucket_id in ('profile-images', 'project-images', 'blog-images', 'certificates', 'resumes', 'testimonials'));

create policy "Admins can upload portfolio storage" on storage.objects
for insert with check (bucket_id in ('profile-images', 'project-images', 'blog-images', 'certificates', 'resumes', 'testimonials') and public.is_admin());

create policy "Admins can update portfolio storage" on storage.objects
for update using (bucket_id in ('profile-images', 'project-images', 'blog-images', 'certificates', 'resumes', 'testimonials') and public.is_admin())
with check (bucket_id in ('profile-images', 'project-images', 'blog-images', 'certificates', 'resumes', 'testimonials') and public.is_admin());

create policy "Admins can delete portfolio storage" on storage.objects
for delete using (bucket_id in ('profile-images', 'project-images', 'blog-images', 'certificates', 'resumes', 'testimonials') and public.is_admin());
