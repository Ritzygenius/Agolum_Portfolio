# Deployment Guide

## Vercel

1. Push the repository to GitHub.
2. Create a Supabase project and run `supabase/migrations/001_initial_schema.sql`, then `supabase/seed.sql`.
3. Locally set `ADMIN_EMAIL` and `ADMIN_PASSWORD`, then run `npm run seed:admin` to create the Supabase Auth admin user and admin authorization row.
4. Add these Vercel environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
5. Deploy with the Vercel Next.js preset.

## Admin Account

Use `npm run seed:admin`. It calls Supabase Auth Admin API, confirms the email, and inserts the user into `public.admin_users`.

## Storage

The migration and seed script create these public buckets:

- `profile-images`
- `project-images`
- `certificates`
- `resumes`
- `testimonials`

Upload files to the matching bucket, then paste public URLs into the admin forms.
