import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://naim-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Naim Hossain | Full-Stack Web Developer & Co-Founder @ Nexovate Labs",
    template: "%s | Naim Hossain",
  },
  description: "Official portfolio of Naim Hossain, Full-Stack Web Developer & Co-Founder at Nexovate Labs. Creator of 8+ production web applications (Elumpu, Admission Warrior, Masud Physics, Rongbela BD, Willow Basket) specializing in Next.js 16, React, Node.js, PostgreSQL, MongoDB, Socket.IO, and RabbitMQ.",
  keywords: [
    "Naim Hossain",
    "Full-Stack Web Developer",
    "Nexovate Labs Co-Founder",
    "Next.js Developer Bangladesh",
    "React Developer Dhaka",
    "Node.js Backend Engineer",
    "PostgreSQL & Prisma Specialist",
    "Elumpu E-Commerce Developer",
    "Admission Warrior LMS",
    "Masud Physics LMS Developer",
    "Rongbela BD Developer",
    "JU IIT ICT Engineer",
    "Jahangirnagar University ICT",
    "Socket.IO Real-Time Systems",
    "RabbitMQ Message Queues",
    "Full Stack Software Engineer",
  ],
  authors: [{ name: "Naim Hossain", url: "https://github.com/NAIM2046" }],
  creator: "Naim Hossain",
  publisher: "Nexovate Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Naim Hossain | Full-Stack Web Developer & Co-Founder @ Nexovate Labs",
    description: "Delivering 8+ production-grade web products across E-Commerce, EdTech, NGO & News using Next.js, React, Node.js, PostgreSQL, and Socket.IO.",
    url: siteUrl,
    siteName: "Naim Hossain Engineering Portfolio",
    images: [
      {
        url: "/naim-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Naim Hossain - Full-Stack Web Developer & Co-Founder @ Nexovate Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naim Hossain | Full-Stack Web Developer & Co-Founder @ Nexovate Labs",
    description: "Creator of 8+ production web applications (Elumpu, Admission Warrior, Masud Physics, Rongbela BD). Expert in Next.js, Node.js, PostgreSQL & Real-Time Systems.",
    images: ["/naim-profile.jpg"],
    creator: "@NAIM2046",
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
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/naim-profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Naim Hossain",
    "alternateName": "NAIM2046",
    "jobTitle": "Full-Stack Web Developer & Co-Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Nexovate Labs",
      "url": "https://www.nexovatelabs.com/",
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Jahangirnagar University",
      "department": "Institute of Information Technology (IIT)",
    },
    "url": siteUrl,
    "image": `${siteUrl}/naim-profile.jpg`,
    "sameAs": [
      "https://github.com/NAIM2046",
      "https://www.linkedin.com/in/naimju/",
      "https://leetcode.com/u/NAIM1111/",
      "https://codeforces.com/profile/naim_2046",
      "https://www.codechef.com/users/naim2046",
      "https://www.nexovatelabs.com/",
    ],
    "email": "mailto:naim2046juiit@gmail.com",
    "telephone": "+8801575606194",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh",
    },
    "knowsAbout": [
      "Full-Stack Web Development",
      "Next.js App Router",
      "React.js",
      "Node.js & Express",
      "TypeScript",
      "PostgreSQL & Prisma ORM",
      "MongoDB & Mongoose",
      "RabbitMQ Asynchronous Queues",
      "Socket.IO Real-Time Systems",
      "Python & FastAPI AI R&D",
      "Cloudflare R2 & AWS S3 Storage",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07090e] text-white selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
