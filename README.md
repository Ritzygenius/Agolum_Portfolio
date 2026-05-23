# Chinagolum Arinzechukwu Igwe Portfolio

Premium personal portfolio and brand platform built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Supabase, Supabase Auth, Supabase Storage, React Hook Form-ready server validation, and SEO-first App Router architecture.

## Features

- Responsive public pages for Home, About, Achievements, Projects, Services, Certifications, Testimonials, Blog, Contact, and Resume.
- Secure `/admin` dashboard protected by Supabase Auth.
- CRUD-ready admin forms for profile content, projects, achievements, certifications, testimonials, services, blog posts, settings, messages, and media references.
- Supabase PostgreSQL schema, row-level security, public read policies, and contact form inserts.
- SEO metadata, Open Graph, Twitter Cards, JSON-LD, sitemap, and robots.
- Floating WhatsApp CTA, dark mode, search/filter projects, seeded content, and deployment guide.

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Supabase Configuration

1. Create a Supabase project.
2. Run `supabase/migrations/001_initial_schema.sql` in the SQL editor.
3. Run `supabase/seed.sql`.
4. Copy the project URL, publishable key, and service role key into `.env.local`.
5. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD`.
6. Run `npm run seed:admin` to create the Supabase Auth admin user, insert the profile, and create storage buckets.

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://stvkgtzcqempycsiuqwn.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0dmtndHpjcWVtcHljc2l1cXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzOTYwMjUsImV4cCI6MjA5Mzk3MjAyNX0.D54M9J9LFVsrzF3SzPvzagRxTYdHTS4645D7dgvDp6U
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXAiLCJ...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ADMIN_EMAIL=admin@chinagolum.com
ADMIN_PASSWORD=Agolum2026
```

## Admin

Visit `/admin/login` and sign in with the seeded Supabase Auth user. Only emails in `public.admin_users` can access the dashboard.

## Deployment

See `DEPLOYMENT.md` for Vercel setup, Supabase setup, and admin user instructions.
