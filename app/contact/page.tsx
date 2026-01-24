"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    goal: "General Fitness",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <div className="w-full bg-background-light relative">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative px-4 md:px-10 lg:px-40 flex justify-center py-10 md:py-16">
          <div className="w-full max-w-[1280px] text-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
              Ready to <span className="text-white/60">Crush It?</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Whether you have questions about memberships, want to book a
              tour, or just need some motivation, we&apos;re here for you.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full grow flex justify-center px-4 md:px-10 lg:px-40 pb-20">
        <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Contact Form Section */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-surface-dark p-6 md:p-8 rounded-2xl border border-surface-dark-lighter shadow-sm">
              <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                Send us a Message
              </h3>
              <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="text-white/70 text-sm font-bold uppercase tracking-wide">
                      First Name
                    </span>
                    <input
                      className="w-full rounded-lg bg-card-dark border border-surface-dark-lighter text-white p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-white/40"
                      placeholder="Enter your first name"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-white/70 text-sm font-bold uppercase tracking-wide">
                      Last Name
                    </span>
                    <input
                      className="w-full rounded-lg bg-card-dark border border-surface-dark-lighter text-white p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-white/40"
                      placeholder="Enter your last name"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="text-white/70 text-sm font-bold uppercase tracking-wide">
                      Email
                    </span>
                    <input
                      className="w-full rounded-lg bg-card-dark border border-surface-dark-lighter text-white p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-white/40"
                      placeholder="name@example.com"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-white/70 text-sm font-bold uppercase tracking-wide">
                      Phone (+251)
                    </span>
                    <input
                      className="w-full rounded-lg bg-card-dark border border-surface-dark-lighter text-white p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-white/40"
                      placeholder="911 23 45 67"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-white/70 text-sm font-bold uppercase tracking-wide">
                    Goal
                  </span>
                  <select
                    className="w-full rounded-lg bg-card-dark border border-surface-dark-lighter text-white p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                  >
                    <option value="General Fitness">General Fitness</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="Personal Training">Personal Training</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-white/70 text-sm font-bold uppercase tracking-wide">
                    Message
                  </span>
                  <textarea
                    className="w-full rounded-lg bg-card-dark border border-surface-dark-lighter text-white p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-white/40 resize-none"
                    placeholder="How can we help you achieve your goals?"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </label>
                <button
                  className="mt-4 w-full bg-primary text-black font-black text-lg py-4 rounded-lg uppercase tracking-wide hover:bg-primary/90 transition-all shadow-lg"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-black p-8 rounded-2xl relative overflow-hidden group border border-surface-dark-lighter">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
              <h3 className="text-white text-2xl font-bold mb-6 relative z-10">
                Contact Info
              </h3>
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-surface-dark-lighter flex items-center justify-center shrink-0 text-white">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm uppercase font-bold tracking-wider mb-1">
                      Phone
                    </p>
                    <p className="text-white text-lg font-medium">
                      +251 911 234 567
                    </p>
                    <p className="text-white text-lg font-medium">
                      +251 116 654 321
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-surface-dark-lighter flex items-center justify-center shrink-0 text-white">
                    <span className="material-symbols-outlined">email</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm uppercase font-bold tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-white text-lg font-medium">
                      hello@brightgym.et
                    </p>
                    <p className="text-white text-lg font-medium">
                      support@brightgym.et
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-surface-dark-lighter flex items-center justify-center shrink-0 text-white">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm uppercase font-bold tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-white text-lg font-medium">
                      Ayat 49
                    </p>
                    <p className="text-white/60">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-surface-dark-lighter flex gap-4">
                <a
                  className="size-10 rounded-full bg-surface-dark-lighter flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
                  href="#"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
                <a
                  className="size-10 rounded-full bg-surface-dark-lighter flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
                  href="#"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
                <a
                  className="size-10 rounded-full bg-surface-dark-lighter flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
                  href="#"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="h-[300px] w-full rounded-2xl overflow-hidden shadow-lg border border-surface-dark-lighter relative">
              <Image
                alt="Map showing gym location in Addis Ababa Bole Area"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxHXNeGsxiOvJqihJorPSLwMNSi1KlqFJHv5UhFQf-WD9R6KshjAKdmxvNjJwIc1zj8DIFr6dpiS8ddoYYWgQG0zFKNThzFa5zY-tK1-8rDr5xR8y5e_FWdAjAisgmezLJqEuR06uVVLgscqXGpUeiVGJsx-Q-F-GVpfQse2YR-CnE9XBXBszFTyMmXIQXXVQ8LJvild4Sv_sNuc0CCpNmlHKisv9LQ3nFEaOUiRhR-AIAZ1kdOuNe0Dyk-TCnPQ4tUkIp2yzc-bk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="material-symbols-outlined text-4xl text-white mb-2">
                    map
                  </span>
                  <p className="text-white font-bold">View on Google Maps</p>
                </div>
              </div>
              <a
                aria-label="Open Map"
                className="absolute inset-0 z-10"
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
        </div>
      </div>

      {/* Common Questions Section */}
      <div className="w-full bg-background-dark py-16">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-[960px] text-center">
            <h2 className="text-white text-3xl font-black mb-12">
              Common Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 rounded-xl bg-surface-dark border border-surface-dark-lighter">
                <div className="size-10 rounded-full bg-surface-dark-lighter flex items-center justify-center text-white mb-4">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Opening Hours
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  We are open daily from 6:00 AM to 8:45 PM to fit your busy
                  schedule.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-surface-dark border border-surface-dark-lighter">
                <div className="size-10 rounded-full bg-surface-dark-lighter flex items-center justify-center text-white mb-4">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Membership Fees
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  We offer flexible packages starting from 1,500 ETB/month.
                  Contact us for student discounts.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-surface-dark border border-surface-dark-lighter">
                <div className="size-10 rounded-full bg-surface-dark-lighter flex items-center justify-center text-white mb-4">
                  <span className="material-symbols-outlined">
                    directions_car
                  </span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Parking</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Free secure parking is available for all members directly in
                  front of the building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Telegram Button */}
      <a
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#0088cc] text-white p-3 pr-5 rounded-full shadow-lg hover:-translate-y-1 transition-transform"
        href="https://t.me/brightgymaddis"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on Telegram"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.82-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.397 0-.33-.149-.465-.526l-1.963-6.465c-.145-.658.164-1.028.753-.844l15.045-5.811c.535-.195.84.131.684.823z"></path>
        </svg>
        <span className="font-bold">Chat with us</span>
      </a>

      <Footer />
    </div>
  );
}

