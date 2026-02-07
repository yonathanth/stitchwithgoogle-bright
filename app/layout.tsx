import type { Metadata } from "next";
import { Lexend, Noto_Sans } from "next/font/google";
import "./globals.css";
import { MultipleSchemaComponent } from "@/lib/schema-component";
import { organizationSchema, localBusinessSchema } from "@/lib/schemas";

const lexend = Lexend({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bright Gym - Premium Fitness in Addis Ababa | Membership Plans & Classes",
  description: "Forging fitness and community in Addis Ababa. Join 1,200+ members at Bright Gym with premium equipment, expert trainers, and 24/7 access. Get started today!",
  keywords: [
    "gym in Addis Ababa",
    "fitness center",
    "membership plans",
    "personal training",
    "group classes",
    "weightlifting",
    "cardio equipment",
  ],
  robots: "index, follow",
  authors: [{ name: "Bright Gym" }],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://brightgymfitness.com",
    title: "Bright Gym - Premium Fitness in Addis Ababa",
    description: "Transform your body and life at Addis Ababa's premier fitness center",
    images: [
      {
        url: "https://brightgymfitness.com/og-image.png",
        type: "image/png",
        width: 1080,
        height: 880,
        alt: "Bright Gym - Premium Fitness in Addis Ababa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@brightgym",
    creator: "@brightgym",
    images: ["https://brightgymfitness.com/og-image.png"],
  },
  alternates: {
    canonical: "https://brightgymfitness.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Favicons – /favicon/ for SEO and consistency */}
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Material Symbols Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <MultipleSchemaComponent
          schemas={[organizationSchema(), localBusinessSchema()]}
        />
      </head>
      <body
        className={`${lexend.variable} ${notoSans.variable} bg-background-light dark:bg-background-dark text-white dark:text-white overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
