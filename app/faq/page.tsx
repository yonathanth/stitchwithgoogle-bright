"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { faqContent } from "@/lib/faq-content";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: "star" },
    { id: "membership", label: "Membership", icon: "card_membership" },
    { id: "trainers", label: "Trainers", icon: "fitness_center" },
    { id: "payments", label: "Payments", icon: "payments" },
    { id: "timings", label: "Timings", icon: "schedule" },
  ];

  const faqs = [...faqContent];

  const filteredFAQs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-[73px]">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[500px] w-full p-4 lg:p-10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/90 to-background-dark z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi2AbKrUfHAPWfH7raXm44atZxmUr1fnJlKWKmY-qT0_fgSAERVdCAYnpGyC4qYEHmYZM2vsWTE7qkSYuh3FqATfVDF_ITKRRsfai2psESYK3VfslGYRqA7r47c3Jq2D-8T-TXuw0gKupCIVR5b0t5IVfzvEiOE5bEZNhBDP3OjDpt_K4-l8GbjS1J3I8TkENFDI4HUQAgo2zPLn-NGrAPMe1kTva3ZjTfITqfq6oWjl4YiHvzaxdG2n0kAdvsUQzdETgQShoyC3Y')",
              }}
            ></div>
          </div>
          <div className="relative z-10 flex flex-col gap-6 text-center max-w-4xl mx-auto mt-10">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
              Got Questions? <br />
              <span className="text-primary">Let&apos;s Get You Moving.</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Find answers to common questions about memberships, payments,
              trainers, and gym access.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-24 px-4 max-w-4xl mx-auto -mt-8 relative z-20">
          {/* Category Filters */}
          <div className="flex overflow-x-auto no-scrollbar gap-3 pb-8 justify-start md:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-black font-bold shadow-lg shadow-primary/20 ring-2 ring-primary"
                    : "bg-card-dark border border-surface-dark-lighter text-white/70 hover:text-white hover:border-primary/50"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {category.icon}
                </span>
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-4">
            {filteredFAQs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-surface-dark rounded-xl border border-surface-dark-lighter open:border-primary/50 overflow-hidden transition-all duration-300"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 list-none outline-none focus:bg-card-dark">
                  <span className="text-white font-bold text-lg">
                    {faq.question}
                  </span>
                  <div className="size-8 rounded-full bg-card-dark flex items-center justify-center group-open:bg-primary group-open:text-black transition-colors">
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-300">
                      expand_more
                    </span>
                  </div>
                </summary>
                <div className="px-5 pb-6 text-white/70 leading-relaxed border-t border-surface-dark-lighter group-open:border-transparent pt-2">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-surface-dark border-t border-surface-dark-lighter">
          <div className="max-w-[1200px] mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-card-dark p-8 md:p-12 border border-surface-dark-lighter">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 size-40 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 size-40 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-white mb-3">
                    Still have questions?
                  </h2>
                  <p className="text-white/70 text-lg">
                    Can&apos;t find what you&apos;re looking for? Chat with our
                    front desk on Telegram or give us a call.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a
                    href="https://t.me/Brightgym2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all min-w-[200px]"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      chat
                    </span>
                    <span>Chat on Telegram</span>
                  </a>
                  <a
                    href="tel:+251977363636"
                    className="bg-surface-dark-lighter hover:bg-surface-dark-lighter/80 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all min-w-[200px]"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      call
                    </span>
                    <span>Call Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}









