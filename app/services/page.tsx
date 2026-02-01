import Header from "../components/Header";
import Footer from "../components/Footer";
import { MultipleSchemaComponent, SchemaComponent } from "@/lib/schema-component";
import { productSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";
import type { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "Membership Plans - Bright Gym | Starter, Athlete & Elite Plans",
  description: "Choose the perfect membership plan for your fitness goals. Starter (ETB 1,500/month), Athlete (ETB 3,500/quarter), or Elite (ETB 1,000/month). No hidden fees!",
  keywords: [
    "gym membership plans",
    "fitness pricing",
    "personal training",
    "group classes",
    "membership cost",
    "Addis Ababa gym",
  ],
  openGraph: {
    title: "Membership Plans - Bright Gym",
    description: "Invest in your best self. Choose the perfect plan for your fitness journey.",
    url: "https://brightgymfitness.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <div className="pt-[73px]">
        <ServicesContent />
        <Footer />
      </div>

      {/* Breadcrumb Schema */}
      <SchemaComponent
        schema={breadcrumbSchema([
          { name: "Home", url: "https://brightgymfitness.com" },
          { name: "Services", url: "https://brightgymfitness.com/services" },
        ])}
      />

      {/* Product Schemas for Membership Plans */}
      <MultipleSchemaComponent
        schemas={[
          productSchema({
            name: "The Starter - Bright Gym Membership",
            description: "Perfect for beginners looking to start their fitness journey with essential access. Off-peak gym floor access, locker room access, and free WiFi.",
            image: "https://brightgymfitness.com/starter-plan.jpg",
            url: "https://brightgymfitness.com/services",
            price: 1500,
            priceCurrency: "ETB",
            availability: "InStock",
            rating: 4.6,
            reviewCount: 28,
          }),
          productSchema({
            name: "The Athlete - Bright Gym Membership",
            description: "Our most balanced package designed for consistent gym-goers seeking results. Unlimited gym access, group classes, sauna & steam access, and 1 free PT session.",
            image: "https://brightgymfitness.com/athlete-plan.jpg",
            url: "https://brightgymfitness.com/services",
            price: 3500,
            priceCurrency: "ETB",
            availability: "InStock",
            rating: 4.9,
            reviewCount: 87,
          }),
          productSchema({
            name: "The Elite - Bright Gym Membership",
            description: "The ultimate commitment to your health with VIP perks and unlimited access. All Athlete features plus priority class booking, monthly nutrition plan, and 5 guest passes per month.",
            image: "https://brightgymfitness.com/elite-plan.jpg",
            url: "https://brightgymfitness.com/services",
            price: 1000,
            priceCurrency: "ETB",
            availability: "InStock",
            rating: 4.95,
            reviewCount: 112,
          }),
        ]}
      />

      {/* FAQ Schema */}
      <SchemaComponent
        schema={faqSchema([
          {
            question: "Can I freeze my membership?",
            answer: "Yes, members on the Athlete and Elite plans can freeze their membership for up to 30 days per year for medical or travel reasons. Please visit the front desk with supporting documents.",
          },
          {
            question: "Are there any hidden fees?",
            answer: "Absolutely not. The price you see is the price you pay. There is a one-time registration fee of ETB 500 for new members which covers your access card and initial assessment.",
          },
          {
            question: "Can I switch plans later?",
            answer: "Yes! You can upgrade your plan at any time. The remaining balance of your current plan will be credited towards your new plan. Downgrades are available upon renewal.",
          },
        ])}
      />
    </div>
  );
}
