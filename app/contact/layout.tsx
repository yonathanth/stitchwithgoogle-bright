import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Bright Gym | Ayat 49, Addis Ababa",
  description:
    "Get in touch with Bright Gym. Visit us at Ayat 49, Addis Ababa. Call, message, or drop by for a tour. We're here to help you start your fitness journey.",
  keywords: [
    "contact Bright Gym",
    "gym Addis Ababa",
    "Ayat 49 gym",
    "Bright Gym location",
    "fitness center contact",
  ],
  openGraph: {
    title: "Contact - Bright Gym",
    description: "Visit us at Ayat 49, Addis Ababa. We're here to help you crush your goals.",
    url: "https://brightgymfitness.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
