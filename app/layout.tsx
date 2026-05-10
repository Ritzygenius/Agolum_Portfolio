import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Providers } from "@/components/site/providers";
import { profile } from "@/lib/data";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${profile.name} | ICT Consultant, Digital Strategist & Program Manager`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Chinagolum Arinzechukwu Igwe",
    "ICT Consultant Nigeria",
    "Digital Marketing Expert Nigeria",
    "Tech Trainer Nigeria",
    "Program Manager",
    "Web Developer Nigeria",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Technology Leader`,
    description: profile.tagline,
    url: siteUrl(),
    siteName: profile.name,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: profile.name }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Technology Leader`,
    description: profile.tagline,
    images: ["/og.svg"],
  },
  alternates: {
    canonical: siteUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            className="fixed bottom-5 right-5 z-50 rounded-md bg-emerald px-4 py-3 text-sm font-black text-white shadow-2xl shadow-emerald/30 transition hover:bg-[#0ea371]"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp
          </a>
        </Providers>
      </body>
    </html>
  );
}
