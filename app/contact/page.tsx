"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <div className="pt-[73px]">
      {/* Hero Section - photo background like FAQ / membership / about */}
      <section className="relative flex flex-col items-center justify-center min-h-[500px] w-full p-4 lg:p-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/90 to-background-dark z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBD_ubbILvAn1VdV0XBZ-NLVSyyuLxIW2utRjOhw7N6waJpLEe5oaUbicIRAlF5wF3V0KaqYDbRY8LGbTXWByUB5yGQaj94MGVgmLw7CqhoSWFbdbyPLnt5DQaFeW8ZIq6bm3AcJpIj3pAxr6iJKYEyi8eT0ppGOgYLpDOe_s_zFXmk5RtHCGJW6giVy0x8dHHouHjdyKS_H0QusXgwTVeV4nqS1eMAKSFsXHXrPt47UuOmuMaEICzeolbYspjl4ZIJvXPXywHe2Wo")',
            }}
          ></div>
        </div>
        <div className="relative z-10 flex flex-col gap-6 text-center max-w-4xl mx-auto mt-10">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
            Ready to <span className="text-primary">Crush It?</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
            Whether you have questions about memberships, want to book a
            tour, or just need some motivation, we&apos;re here for you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full grow flex justify-center px-4 md:px-10 lg:px-40 pb-20">
        <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info Section */}
          <div className="bg-black p-6 md:p-8 rounded-2xl relative overflow-hidden group border border-surface-dark-lighter text-center flex flex-col items-center">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6 relative z-10">
                Contact Info
              </h3>
              <div className="flex flex-col gap-4 md:gap-6 relative z-10 items-center">
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-center sm:text-left">
                  <div className="size-10 md:size-12 rounded-full bg-surface-dark-lighter flex items-center justify-center shrink-0 text-white">
                    <span className="material-symbols-outlined text-lg md:text-xl">call</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs md:text-sm uppercase font-bold tracking-wider mb-1">
                      Phone
                    </p>
                    <a href="tel:+251975427575" className="text-white text-base md:text-lg font-medium block hover:text-primary transition-colors">
                      0975427575
                    </a>
                    <a href="tel:+251977363636" className="text-white text-base md:text-lg font-medium block hover:text-primary transition-colors">
                      0977363636
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-center sm:text-left">
                  <div className="size-10 md:size-12 rounded-full bg-surface-dark-lighter flex items-center justify-center shrink-0 text-white">
                    <span className="material-symbols-outlined text-lg md:text-xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs md:text-sm uppercase font-bold tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-white text-base md:text-lg font-medium">
                      Ayat 49
                    </p>
                    <p className="text-white/60 text-sm">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-surface-dark-lighter flex gap-4 justify-center">
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
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-surface-dark-lighter lg:sticky lg:top-[calc(73px+1rem)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435.71408692663516!2d38.88910541534392!3d9.01081928677224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b003514d5af%3A0x795f6d93e327adf4!2sBright%20gym%20Ayat%2049%20zemer%20building!5e0!3m2!1sen!2set!4v1770453049322!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bright Gym location on Google Maps"
            />
          </div>
        </div>
      </div>

      {/* Common Questions Section */}
      <div className="w-full bg-background-dark py-12 md:py-16">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-[960px] text-center">
            <h2 className="text-white text-2xl md:text-3xl font-black mb-8 md:mb-12">
              Common Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
              <div className="p-5 md:p-6 rounded-xl bg-surface-dark border border-surface-dark-lighter">
                <div className="size-9 md:size-10 rounded-full bg-surface-dark-lighter flex items-center justify-center text-white mb-3 md:mb-4">
                  <span className="material-symbols-outlined text-lg md:text-xl">schedule</span>
                </div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1.5 md:mb-2">
                  Opening Hours
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our opening hours are from 6:00 AM to 8:45 PM on Saturdays,
                  and from 6:00 AM to 10:00 PM on Sundays.
                </p>
              </div>
              <div className="p-5 md:p-6 rounded-xl bg-surface-dark border border-surface-dark-lighter">
                <div className="size-9 md:size-10 rounded-full bg-surface-dark-lighter flex items-center justify-center text-white mb-3 md:mb-4">
                  <span className="material-symbols-outlined text-lg md:text-xl">payments</span>
                </div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1.5 md:mb-2">
                  Membership Fees
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  We are flexible and affordable for the services we offer. We
                  offer payment for different periods to suit your needs.
                </p>
              </div>
              <div className="p-5 md:p-6 rounded-xl bg-surface-dark border border-surface-dark-lighter">
                <div className="size-9 md:size-10 rounded-full bg-surface-dark-lighter flex items-center justify-center text-white mb-3 md:mb-4">
                  <span className="material-symbols-outlined text-lg md:text-xl">directions_car</span>
                </div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1.5 md:mb-2">Parking</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Parking is available for members beside the building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Telegram Button */}
      <a
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#0088cc] text-white p-3 pr-5 rounded-full shadow-lg hover:-translate-y-1 transition-transform"
        href="https://t.me/Brightgym2025"
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
    </div>
  );
}

