import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Damian Roc Olivo Barzallo - Desarrollador Full Stack",
    template: "%s | Damian Roc Olivo Barzallo",
  },
  description:
    "Portafolio personal de Damian Roc Olivo Barzallo - Desarrollador Full Stack especializado en tecnologías web modernas. React, NestJS, Python, PostgreSQL.",
  keywords: [
    "desarrollador full stack",
    "programador web",
    "React",
    "Next.js",
    "NestJS",
    "Python",
    "PostgreSQL",
    "TypeScript",
    "JavaScript",
    "Angular",
    "Astro",
    "Docker",
    "desarrollo web",
    "frontend",
    "backend",
    "Cuenca",
    "Ecuador",
    "portafolio",
    "damian olivo",
    "desarrollador ecuador",
  ],
  authors: [
    {
      name: "Damian Roc Olivo Barzallo",
      url: "https://github.com/DamianRoc13",
    },
  ],
  creator: "Damian Roc Olivo Barzallo",
  publisher: "Damian Roc Olivo Barzallo",
  metadataBase: new URL("https://damianroc-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-white.svg",
    shortcut: "/logo-white.svg",
    apple: "/logo-white.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://damianroc-portfolio.vercel.app/",
    title: "Damian Roc Olivo Barzallo - Desarrollador Full Stack",
    description:
      "Portafolio personal de Damian Roc Olivo Barzallo - Desarrollador Full Stack especializado en tecnologías web modernas. React, NestJS, Python, PostgreSQL.",
    siteName: "Damian Roc Olivo Barzallo",
    images: [
      {
        url: "https://damianroc-portfolio.vercel.app/portafolio.png",
        width: 1200,
        height: 630,
        alt: "Damian Roc Olivo Barzallo - Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@damianroc13",
    title: "Damian Roc Olivo Barzallo - Desarrollador Full Stack",
    description:
      "Portafolio personal de Damian Roc Olivo Barzallo - Desarrollador Full Stack especializado en tecnologías web modernas. React, NestJS, Python, PostgreSQL.",
    images: ["https://damianroc-portfolio.vercel.app/portafolio.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
