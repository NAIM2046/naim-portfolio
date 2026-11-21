import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PERSONAL_INFO } from "@/data/portfolioData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://naim.nexovatelabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Naim Hossain | Full-Stack Web Developer & Co-Founder @ Nexovate Labs",
    template: "%s | Naim Hossain",
  },
  description:
    "Portfolio of Naim Hossain — Full-Stack Web Developer and Co-Founder at Nexovate Labs. Building production-grade Next.js, React, Node.js, PostgreSQL, Prisma, and real-time Socket.IO web applications.",
  keywords: [
    "Naim Hossain",
    "Naim Hossain Developer",
    "Nexovate Labs",
    "Full-Stack Web Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "Node.js Express Developer",
    "PostgreSQL Prisma Developer",
    "Jahangirnagar University IIT",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: SITE_URL }],
  creator: PERSONAL_INFO.name,
  publisher: "Nexovate Labs",
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
  openGraph: {
    title: "Naim Hossain | Full-Stack Web Developer & Co-Founder @ Nexovate Labs",
    description:
      "Production-grade web applications and real-time systems built with Next.js, React, Node.js, PostgreSQL, Prisma, and Socket.IO.",
    url: SITE_URL,
    siteName: "Naim Hossain Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/naim-profile.jpg",
        width: 800,
        height: 800,
        alt: "Naim Hossain - Full-Stack Web Developer & Co-Founder at Nexovate Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naim Hossain | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer & Co-Founder @ Nexovate Labs. Building scalable web apps with Next.js, Node.js, and PostgreSQL.",
    images: ["/naim-profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: PERSONAL_INFO.name,
        url: SITE_URL,
        image: `${SITE_URL}/naim-profile.jpg`,
        jobTitle: "Full-Stack Web Developer & Co-Founder",
        description: PERSONAL_INFO.bio,
        email: `mailto:${PERSONAL_INFO.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
        worksFor: {
          "@type": "Organization",
          name: "Nexovate Labs",
          url: "https://nexovatelabs.com",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: PERSONAL_INFO.education.institution,
        },
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma ORM",
          "MongoDB",
          "Socket.IO",
          "FastAPI",
        ],
        sameAs: [
          PERSONAL_INFO.github,
          PERSONAL_INFO.linkedin,
          PERSONAL_INFO.leetcode,
          PERSONAL_INFO.codeforces,
          PERSONAL_INFO.codechef,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Naim Hossain Portfolio",
        description:
          "Official portfolio of Naim Hossain, Full-Stack Web Developer and Co-Founder at Nexovate Labs.",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
