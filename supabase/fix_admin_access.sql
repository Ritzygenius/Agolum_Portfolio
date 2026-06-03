-- =====================================================
-- FIX ADMIN ACCESS SCRIPT
-- Run this in Supabase SQL Editor (as service_role or via dashboard)
-- This ensures the admin user can pass the middleware check
-- =====================================================

-- 1. DIAGNOSTICS - Run these first to see the current state
-- =====================================================

-- Check if the auth user exists
SELECT 
  id as auth_user_id,
  email,
  created_at,
  email_confirmed_at IS NOT NULL as email_confirmed
FROM auth.users 
WHERE email = 'admin@chinagolum.com';

-- Check current admin_users row (if any)
SELECT * FROM public.admin_users 
WHERE email = 'admin@chinagolum.com';

-- Check profile
SELECT * FROM public.profiles 
WHERE email = 'agolumarinze@gmail.com' 
LIMIT 1;

-- 2. FIX: Ensure admin_users row exists with correct auth_user_id
-- =====================================================

DO $$
DECLARE
  v_auth_user_id uuid;
  v_admin_email text := 'admin@chinagolum.com';
BEGIN
  -- Get the auth user id
  SELECT id INTO v_auth_user_id 
  FROM auth.users 
  WHERE email = v_admin_email 
  LIMIT 1;

  IF v_auth_user_id IS NULL THEN
    RAISE NOTICE 'ERROR: No auth user found with email %', v_admin_email;
    RETURN;
  END IF;

  RAISE NOTICE 'Found auth user: %', v_auth_user_id;

  -- Insert or update the admin_users row
  INSERT INTO public.admin_users (auth_user_id, email, created_at, updated_at)
  VALUES (v_auth_user_id, v_admin_email, now(), now())
  ON CONFLICT (email) 
  DO UPDATE SET 
    auth_user_id = EXCLUDED.auth_user_id,
    updated_at = now();

  RAISE NOTICE 'Successfully ensured admin_users row for %', v_admin_email;

  -- Also make sure the main profile exists (fallback)
  INSERT INTO public.profiles (
    full_name, 
    professional_title, 
    tagline, 
    summary, 
    nationality, 
    location, 
    email, 
    phone, 
    whatsapp_number, 
    portrait_url, 
    cv_url, 
    calendly_url,
    instagram_url,
    facebook_url,
    linkedin_url,
    x_url
  )
  SELECT 
    'Chinagolum Arinzechukwu Igwe',
    'Tech Leader | Digital Strategist | Program Manager | ICT Policy Advisor | Digital Marketing Expert | Web Developer | Entrepreneur',
    'Empowering Individuals, Organizations, and Governments Through Technology, Education, and Innovation.',
    'Experienced technology leader, digital strategist, educator, and ICT policy advisor with over 10 years of experience in program management, digital marketing, web development, youth empowerment, and government technology transformation.',
    'Nigerian',
    'Enugu, Nigeria',
    'agolumarinze@gmail.com',
    '09048127607',
    '09048127607',
    '/agolu-agolu.jpeg',
    'https://drive.google.com/file/d/1vmj6s-yRqxFz4n5HHZyMWFE_MCgML67L/view?usp=drive_link',
    'https://calendly.com/agolumarinze',
    'https://www.instagram.com/ritzyagolum?igsh=OW00NHdhcmE5dnh5',
    'https://www.facebook.com/igwea',
    '#',
    'https://x.com/Ritzygeniusa'
  WHERE NOT EXISTS (
    SELECT 1 FROM public.profiles WHERE email = 'agolumarinze@gmail.com'
  );

  RAISE NOTICE 'Profile check complete';
END $$;

-- 3. FINAL VERIFICATION
-- =====================================================

-- This should now return a row
SELECT 
  au.id,
  au.auth_user_id,
  au.email,
  u.email as auth_email,
  au.created_at
FROM public.admin_users au
JOIN auth.users u ON u.id = au.auth_user_id
WHERE au.email = 'admin@chinagolum.com';

-- Test that the is_admin() function logic would work for this user
-- (We simulate by checking the condition manually)
SELECT 
  'Admin access should now work' as status,
  EXISTS (
    SELECT 1 
    FROM public.admin_users 
    WHERE auth_user_id = (
      SELECT id FROM auth.users WHERE email = 'admin@chinagolum.com' LIMIT 1
    )
    OR email = 'admin@chinagolum.com'
  ) as admin_row_exists;
