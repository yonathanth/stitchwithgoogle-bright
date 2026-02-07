import type { Metadata } from "next";
import { SchemaComponent } from "@/lib/schema-component";
import { faqSchema } from "@/lib/schemas";
import { breadcrumbSchema } from "@/lib/schemas";
import { faqContent } from "@/lib/faq-content";

export const metadata: Metadata = {
  title: "FAQ - Bright Gym | Memberships, Payments, Hours & More",
  description:
    "Find answers to common questions about Bright Gym: opening hours, membership plans, payments, personal training, parking, and more. Ayat 49, Addis Ababa.",
  keywords: [
    "Bright Gym FAQ",
    "gym hours Addis Ababa",
    "membership freeze",
    "gym payment",
    "Ayat 49 gym",
  ],
  openGraph: {
    title: "FAQ - Bright Gym",
    description: "Answers about memberships, payments, trainers, and gym access.",
    url: "https://brightgymfitness.com/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchemaData = faqSchema(
    faqContent.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <>
      <SchemaComponent
        schema={breadcrumbSchema([
          { name: "Home", url: "https://brightgymfitness.com" },
          { name: "FAQ", url: "https://brightgymfitness.com/faq" },
        ])}
      />
      <SchemaComponent schema={faqSchemaData} />
      {children}
    </>
  );
}
