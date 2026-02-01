import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { SchemaComponent } from "@/lib/schema-component";
import { breadcrumbSchema } from "@/lib/schemas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bright Gym - Our Story, Team & Mission | Premium Fitness in Addis Ababa",
  description: "Discover the story of Bright Gym. Learn about our mission to provide premium fitness facilities, expert trainers, and inclusive community in Addis Ababa since 2016.",
  keywords: [
    "about Bright Gym",
    "gym owners",
    "fitness trainers",
    "fitness center history",
    "gym team",
    "our mission",
  ],
  openGraph: {
    title: "About Bright Gym - Forging Fitness in Addis",
    description: "Learn about our journey creating a premium, energetic fitness community",
    url: "https://brightgymfitness.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <div className="layout-container flex w-full flex-col">
        <Header />

        <main className="flex flex-col items-center justify-center w-full pt-[73px]">
          <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
            {/* HeroSection */}
            <div className="@container w-full">
              <div className="p-4 md:px-10 md:py-8">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10 md:px-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBD_ubbILvAn1VdV0XBZ-NLVSyyuLxIW2utRjOhw7N6waJpLEe5oaUbicIRAlF5wF3V0KaqYDbRY8LGbTXWByUB5yGQaj94MGVgmLw7CqhoSWFbdbyPLnt5DQaFeW8ZIq6bm3AcJpIj3pAxr6iJKYEyi8eT0ppGOgYLpDOe_s_zFXmk5RtHCGJW6giVy0x8dHHouHjdyKS_H0QusXgwTVeV4nqS1eMAKSFsXHXrPt47UuOmuMaEICzeolbYspjl4ZIJvXPXywHe2Wo")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-left max-w-2xl">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                      Forging Fitness in Addis
                    </h1>
                    <h2 className="text-white/90 text-sm font-normal leading-relaxed md:text-lg">
                      More Than Just a Gym. Experience a premium, energetic
                      community dedicated to your growth right here in the
                      capital.
                    </h2>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    <Link
                      href="/register"
                      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity"
                    >
                      <span className="truncate">Join the Movement</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Section */}
            <div className="@container w-full">
              <div className="flex flex-col gap-10 px-4 py-10 md:px-10 md:flex-row md:items-center">
                <div
                  className="w-full md:w-1/2 bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-lg"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAypHCKA2wkbSQW5MJ-9Kk_KRvsSSfjRw6edahmzda33t6axAFd-fj-GJgL690V8EAx-zzxbjUwApMnf5_jVlGlrDMfjFzpRY0vmuQrNQjQU3VHE7WzskYBwuaW6mtcD5wsjzF8f66809yBrEJp88N6BsWR2rzSTNii9gtlAEMp3KVaI7amwTP9_o5vUemN7DPpgEEcIUisQnAyhlNFYPoDwHTKM0KFbtV-w941GSUxGn34QvozBVpeCHBRTosmiSy9PLRlWxnskkk")',
                  }}
                ></div>
                <div className="flex flex-col gap-6 md:w-1/2 md:pl-6">
                  <div className="flex flex-col gap-4 text-left">
                    <div className="inline-flex items-center gap-2">
                      <div className="h-1 w-8 bg-primary rounded-full"></div>
                      <span className="text-primary font-bold tracking-widest uppercase text-xs">
                        Our Origins
                      </span>
                    </div>
                    <h2 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] md:text-4xl">
                      Our Story
                    </h2>
                    <p className="text-white/70 text-base font-normal leading-relaxed">
                      Founded in the heart of Addis Ababa, we bridge the gap
                      between premium fitness and community accessibility. We
                      started with a simple mission: to create a space where
                      hard work meets high-quality guidance.
                    </p>
                    <p className="text-white/70 text-base font-normal leading-relaxed">
                      From that small group we grew into a place where Addis
                      trains—where everyone gets access to solid equipment and
                      coaches who push you, no matter where you start.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="w-full bg-surface-dark/50 my-8 py-8">
              <div className="flex flex-col gap-10 px-4 py-10 md:px-10">
                <div className="flex flex-col gap-4 text-center items-center">
                  <h2 className="text-white tracking-tight text-3xl font-bold leading-tight md:text-4xl max-w-[720px]">
                    Our Core Values
                  </h2>
                  <p className="text-white/70 text-base font-normal leading-normal max-w-[720px]">
                    We are driven by principles that empower every individual to
                    reach their peak potential.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Value 1 */}
                  <div className="flex flex-1 gap-4 rounded-xl border border-surface-dark-lighter bg-surface-dark p-6 flex-col hover:border-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-surface-dark-lighter flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      <span className="material-symbols-outlined text-[28px]">
                        groups
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-xl font-bold leading-tight">
                        Inclusivity
                      </h3>
                      <p className="text-white/60 text-sm font-normal leading-relaxed">
                        Fitness for everyone. We create a welcoming space for
                        all levels, from beginners to pro athletes.
                      </p>
                    </div>
                  </div>

                  {/* Value 2 */}
                  <div className="flex flex-1 gap-4 rounded-xl border border-surface-dark-lighter bg-surface-dark p-6 flex-col hover:border-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-surface-dark-lighter flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      <span className="material-symbols-outlined text-[28px]">
                        emoji_events
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-xl font-bold leading-tight">
                        Excellence
                      </h3>
                      <p className="text-white/60 text-sm font-normal leading-relaxed">
                        Top-tier equipment and certified trainers ensuring the
                        best guidance for your specific goals.
                      </p>
                    </div>
                  </div>

                  {/* Value 3 */}
                  <div className="flex flex-1 gap-4 rounded-xl border border-surface-dark-lighter bg-surface-dark p-6 flex-col hover:border-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-surface-dark-lighter flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      <span className="material-symbols-outlined text-[28px]">
                        fitness_center
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-xl font-bold leading-tight">
                        Grit
                      </h3>
                      <p className="text-white/60 text-sm font-normal leading-relaxed">
                        We celebrate the hard work, discipline, and sweat that
                        goes into real personal growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="flex flex-col gap-10 px-4 py-10 md:px-10 w-full">
              <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
                <div className="flex flex-col gap-2">
                  <h2 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] md:text-4xl">
                    Meet the Team
                  </h2>
                  <p className="text-white/70 text-base font-normal max-w-xl">
                    Our certified coaches are here to push you further than you
                    thought possible.
                  </p>
                </div>
                <Link
                  className="text-primary font-bold text-sm hover:underline flex items-center gap-1"
                  href="#"
                >
                  View All Trainers{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Coach 1 */}
                <div className="group relative overflow-hidden rounded-xl bg-surface-dark aspect-[3/4]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBv71iVhg12k8rkHwH6iTeEhyZKtA9NXGvbhRP7QtfhxF4zsd8NVo24eNw3bSPVlKbsKrm3TPYo_amHcxQZxFCXoYt9zqQ7pgiBknIwo4hzoAArT8kpPH86HaZ0BgMbihKKlvqUjKyu-Af8oyY8IUuq7kwzg2JbbknWB9Qs03oP9bGm2fRbZvKYdwnEbCVZQIOQf6yjKt2CVOEe6E0CgAxa2acVV1Pnn3TAvqcvFbaBLs3qWCBFflcDeo5ZcbcEyezVRg7ZnMM6CAU")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white text-lg font-bold">
                      Dawit Kebede
                    </h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-wide mb-1">
                      Head Coach
                    </p>
                    <p className="text-gray-300 text-xs line-clamp-2">
                      Specializes in functional strength and conditioning.
                    </p>
                  </div>
                </div>

                {/* Coach 2 */}
                <div className="group relative overflow-hidden rounded-xl bg-surface-dark aspect-[3/4]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvZnuDIFNDyl0YBYPyhmnvm_-L_bnuPmknX8xehmFjT5_2gjmnfDMWmOLJ8P5eW0RiD6luFJKFrscbyL3sD21yqJq6PCkTCzo2MZfWJ9U06gtnDDvMWwDNVyRXAIsbgHmc8WFjlRa1EoEXJHBwWkJ8sqY_6IDRkv-d0m2owwyFpoF5d9ZTP3iNtS3gD9413r8owtY3GDWSDLeg-jZdq-PpLkmbdwiYH2vOkk9rfG_zymRxD1VN3BmIgjY_m7_f6cE2M9TYnv_QzI4")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white text-lg font-bold">
                      Sara Tesfaye
                    </h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-wide mb-1">
                      Yoga & Mobility
                    </p>
                    <p className="text-gray-300 text-xs line-clamp-2">
                      Bringing balance and flexibility to your routine.
                    </p>
                  </div>
                </div>

                {/* Coach 3 */}
                <div className="group relative overflow-hidden rounded-xl bg-surface-dark aspect-[3/4]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbyVimiohS3_BIQdPVh-F50VZJeccgNELawx1bLDbftpEafrzVBs3W-4cszYgSNuB2kaMX7Uw6VHcWmiv3RykenGvzh3sAwEERS7z6tcuiOcVOQ0LhXzUKPRUGSQ9QTLfAoh6DP-Gwv8oeUBCwNI0lm7mxuYSMhXzHDawKMiZg4A8g18xJGVdgLycXdqqvsi_xZdU0OQUkvQHy05aNXy3rzKt1BqHHAzwLxyZETwEeku412B0KKYCMf5Tfz_ueIsbPOUlUJ0ABw6w")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white text-lg font-bold">
                      Michael Alemu
                    </h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-wide mb-1">
                      HIIT Specialist
                    </p>
                    <p className="text-gray-300 text-xs line-clamp-2">
                      High energy workouts to burn fat and build endurance.
                    </p>
                  </div>
                </div>

                {/* Coach 4 */}
                <div className="group relative overflow-hidden rounded-xl bg-surface-dark aspect-[3/4]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXFr8iDXP6wEI_Rdad1WmnE7RhJZ5D2DYESkUaBd9wPevNSBcC2btIFBGtJmMTGLBepaPq9RvPz2ysaDyD20bQIuG0pTywcP0AWmi6S3nymiabdV8z6pujYdo50QSccPF3BVAuic4hxHvBE0gvj4nbOd393wIC5Ju3_o9wspPDJVn70sExWXtpEPZhc8mB9gfd8ejKe33Axyqcowccv-q2_szpfwTGhCPxSW9EMZ7AE8qlJ6NNVCxg6-5GIzrb2GaH5ILsRUVnovc")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white text-lg font-bold">
                      Bethlehem Haile
                    </h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-wide mb-1">
                      Nutrition & Wellness
                    </p>
                    <p className="text-gray-300 text-xs line-clamp-2">
                      Guiding your fuel for optimal performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col w-full px-4 py-6 md:px-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
              </div>
            </div>

            {/* CTA Section */}
            <div className="w-full px-4 py-16 md:px-10">
              <div className="rounded-2xl bg-gradient-to-r from-surface-dark to-surface-dark-lighter border border-surface-dark-lighter p-8 md:p-12 text-center relative overflow-hidden">
                {/* Abstract decoration */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight max-w-2xl">
                    Ready to start your journey?
                  </h2>
                  <p className="text-white/80 text-lg max-w-xl">
                    Join the Bright Gym family today. Sign up now and get your
                    first day pass absolutely free.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                    <Link
                      href="/register"
                      className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-black text-base font-bold leading-normal hover:bg-opacity-90 transition-all transform hover:scale-105"
                    >
                      Register Now
                    </Link>
                    <Link
                      href="/services"
                      className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-transparent border-2 border-white/20 text-white text-base font-bold leading-normal hover:bg-white/10 transition-all"
                    >
                      View Membership Plans
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />

        {/* Breadcrumb Schema */}
        <SchemaComponent
          schema={breadcrumbSchema([
            { name: "Home", url: "https://brightgymfitness.com" },
            { name: "About", url: "https://brightgymfitness.com/about" },
          ])}
        />
      </div>
    </div>
  );
}

