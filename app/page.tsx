import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import { SchemaComponent } from "@/lib/schema-component";
import { reviewSchema, breadcrumbSchema } from "@/lib/schemas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Bright Gym",
  description: "Transform your body and life at Bright Gym. Premium equipment, expert trainers, and a supportive community await.",
  openGraph: {
    title: "Bright Gym - Transform Your Body, Transform Your Life",
    description: "Join Addis Ababa's premier fitness center with 200+ members",
    url: "https://brightgymfitness.com",
  },
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex flex-col w-full pt-[73px]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[calc(100vh-73px)] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBD_ubbILvAn1VdV0XBZ-NLVSyyuLxIW2utRjOhw7N6waJpLEe5oaUbicIRAlF5wF3V0KaqYDbRY8LGbTXWByUB5yGQaj94MGVgmLw7CqhoSWFbdbyPLnt5DQaFeW8ZIq6bm3AcJpIj3pAxr6iJKYEyi8eT0ppGOgYLpDOe_s_zFXmk5RtHCGJW6giVy0x8dHHouHjdyKS_H0QusXgwTVeV4nqS1eMAKSFsXHXrPt47UuOmuMaEICzeolbYspjl4ZIJvXPXywHe2Wo")',
            }}
          ></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10 text-center">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 mb-2 sm:mb-4">
                <span className="material-symbols-outlined text-primary text-xs sm:text-sm">
                  fitness_center
                </span>
                <span className="text-primary text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                  Brighten Your Future
                </span>
              </div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                Train Your Body,
                <br />
                <span className="text-primary">Free Your Mind</span>
              </h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed">
                Join Bright Gym and become part of a community that pushes you
                beyond your limits. Premium equipment, expert trainers, and a
                supportive environment await.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 items-center justify-center">
                <Link
                  href="/register"
                  className="flex w-fit items-center justify-center rounded-lg h-14 px-8 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <span>Start Your Journey</span>
                  <span className="material-symbols-outlined ml-2">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="flex w-fit items-center justify-center rounded-lg h-14 px-8 bg-transparent border-2 border-white/20 text-white text-base font-bold leading-normal hover:bg-white/10 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-10 bg-background-dark">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-1 w-8 bg-primary rounded-full"></div>
                <span className="text-primary font-bold tracking-widest uppercase text-xs">
                  Why Bright Gym
                </span>
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4">
                Where Addis Gets Strong
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                A real gym for real people—quality kit, trainers who know your
                name, and a community that shows up. No fluff, just results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col gap-4 p-8 rounded-2xl bg-surface-dark border border-surface-dark-lighter hover:border-primary/50 transition-colors group text-center md:text-left items-center md:items-start">
                <div className="size-16 rounded-full bg-surface-dark-lighter flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <span className="material-symbols-outlined text-4xl">
                    fitness_center
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold">Solid Equipment</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Good machines and free weights, kept clean and in working order.
                  Everything you need to train properly, right here in Addis.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-4 p-8 rounded-2xl bg-surface-dark border border-surface-dark-lighter hover:border-primary/50 transition-colors group text-center md:text-left items-center md:items-start">
                <div className="size-16 rounded-full bg-surface-dark-lighter flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <span className="material-symbols-outlined text-4xl">
                    groups
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold">Trainers Who Care</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Experienced coaches who actually work with you—whether you're
                  just starting or pushing for the next level. No one gets left behind.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-4 p-8 rounded-2xl bg-surface-dark border border-surface-dark-lighter hover:border-primary/50 transition-colors group text-center md:text-left items-center md:items-start">
                <div className="size-16 rounded-full bg-surface-dark-lighter flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <span className="material-symbols-outlined text-4xl">
                    schedule
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold">Hours That Fit Your Day</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Open early until late—so you can train before work, on lunch, or
                  after the day winds down. We're here when Addis is moving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 md:px-10 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2 items-center text-center p-6 rounded-xl bg-surface-dark border border-surface-dark-lighter">
                <p className="text-primary text-4xl md:text-5xl font-black leading-tight">
                  200+
                </p>
                <p className="text-white text-sm font-medium uppercase tracking-wider opacity-80">
                  Members
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center text-center p-6 rounded-xl bg-surface-dark border border-surface-dark-lighter">
                <p className="text-primary text-4xl md:text-5xl font-black leading-tight">
                  5
                </p>
                <p className="text-white text-sm font-medium uppercase tracking-wider opacity-80">
                  Years of Experience
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center text-center p-6 rounded-xl bg-surface-dark border border-surface-dark-lighter">
                <p className="text-primary text-4xl md:text-5xl font-black leading-tight">
                  10+
                </p>
                <p className="text-white text-sm font-medium uppercase tracking-wider opacity-80">
                  Classes Weekly
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center text-center p-6 rounded-xl bg-surface-dark border border-surface-dark-lighter">
                <p className="text-primary text-4xl md:text-5xl font-black leading-tight">
                  7
                </p>
                <p className="text-white text-sm font-medium uppercase tracking-wider opacity-80">
                  Days Open
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 md:px-10 bg-background-dark">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-1 w-8 bg-primary rounded-full"></div>
                <span className="text-primary font-bold tracking-widest uppercase text-xs">
                  Success Stories
                </span>
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4">
                Join the Community
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                See what our members are saying about their transformation
                journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="flex flex-col gap-4 p-8 rounded-2xl bg-surface-dark border border-surface-dark-lighter text-center md:text-left items-center md:items-stretch">
                <p className="text-white/80 text-sm leading-relaxed">
                  &quot;The trainers here are incredible. They pushed me to
                  achieve goals I never thought possible. Best investment in
                  myself I&apos;ve ever made.&quot;
                </p>
                <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
                  <div className="size-12 rounded-full bg-surface-dark-lighter flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Leul Derebe</p>
                    <p className="text-white/60 text-xs">Member since 2022</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col gap-4 p-8 rounded-2xl bg-surface-dark border border-surface-dark-lighter text-center md:text-left items-center md:items-stretch">
                <p className="text-white/80 text-sm leading-relaxed">
                  &quot;The hours fit my schedule—early or late, the gym is there.
                  Equipment is always clean and well-kept. Highly recommend!&quot;
                </p>
                <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
                  <div className="size-12 rounded-full bg-surface-dark-lighter flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Sara Tesfaye</p>
                    <p className="text-white/60 text-xs">Member since 2023</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col gap-4 p-8 rounded-2xl bg-surface-dark border border-surface-dark-lighter text-center md:text-left items-center md:items-stretch">
                <p className="text-white/80 text-sm leading-relaxed">
                  &quot;The community here is amazing. Everyone is supportive
                  and the atmosphere is motivating. I look forward to every
                  workout!&quot;
                </p>
                <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
                  <div className="size-12 rounded-full bg-surface-dark-lighter flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Michael Alemu</p>
                    <p className="text-white/60 text-xs">Member since 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-10 bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Join over 200 members who are already on their fitness journey.
              Your best self is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/register"
                className="flex w-fit items-center justify-center rounded-lg h-14 px-8 bg-primary text-black text-base font-bold leading-normal hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <span>Get Started Today</span>
                <span className="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/services"
                className="flex w-fit items-center justify-center rounded-lg h-14 px-8 bg-transparent border-2 border-white/20 text-white text-base font-bold leading-normal hover:bg-white/10 transition-all"
              >
                View Membership Plans
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Breadcrumb Schema */}
      <SchemaComponent
        schema={breadcrumbSchema([
          { name: "Home", url: "https://brightgymfitness.com" },
        ])}
      />

      {/* Review Schemas */}
      <SchemaComponent
        schema={reviewSchema({
          author: "Leul Derebe",
          rating: 5,
          reviewBody:
            "The trainers here are incredible. They pushed me to achieve goals I never thought possible. Best investment in myself I've ever made.",
          reviewDate: "2022-03-15",
        })}
      />

      <SchemaComponent
        schema={reviewSchema({
          author: "Sara Tesfaye",
          rating: 5,
          reviewBody:
            "The hours fit my schedule early or late, the gym is there. Equipment is always clean and well-kept. Highly recommend!",
          reviewDate: "2023-06-20",
        })}
      />

      <SchemaComponent
        schema={reviewSchema({
          author: "Michael Alemu",
          rating: 5,
          reviewBody:
            "The community here is amazing. Everyone is supportive and the atmosphere is motivating. I look forward to every workout!",
          reviewDate: "2021-11-10",
        })}
      />
    </div>
  );
}
