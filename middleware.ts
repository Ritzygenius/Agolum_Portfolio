import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder",
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    },
  );

  const { data } = await supabase.auth.getUser();
  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");
  const isLogin = request.nextUrl.pathname === "/admin/login";

  if (isAdminPath && !isLogin && !data.user) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (isAdminPath && !isLogin && data.user) {
    const { data: admin } = await supabase
      .from("admin_users")
      .select("id")
      .or(`auth_user_id.eq.${data.user.id},email.eq.${data.user.email}`)
      .maybeSingle();

    if (!admin) {
      await supabase.auth.signOut();
      return NextResponse.redirect(new URL("/admin/login?error=Admin access required", request.url));
    }
  }

  if (isLogin && data.user) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
