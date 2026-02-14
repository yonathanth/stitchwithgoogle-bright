import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-dark-lighter bg-background-dark py-12 px-4 md:px-10 text-center md:text-left">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center justify-center md:justify-start gap-2 text-white hover:opacity-80 transition-opacity">
            <div className="size-10 relative shrink-0">
              <Image
                src="/logo-bright.png"
                alt="Bright Gym Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-xl">Bright Gym</h3>
          </Link>
          <p className="text-sm text-gray-400">
            Forging fitness and community in Addis Ababa since 2016.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link className="hover:text-primary" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Explore</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link className="hover:text-primary" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/services">
                Membership
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/register">
                Join Now
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Visit Us</h4>
          <p className="text-sm text-gray-400">Ayat 49, Addis Ababa</p>
          <p className="text-sm text-gray-400 mt-2">Mon–Sat: 6:00 AM – 8:45 PM</p>
          <p className="text-sm text-gray-400">Sun: 6:00 AM – 10:00 AM</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-surface-dark-lighter flex flex-col sm:flex-row items-center gap-4">
        {/* Spacer on left for md+ so center block is truly centered */}
        <div className="hidden sm:block flex-1" aria-hidden="true" />
        <div className="flex flex-col items-center gap-1 text-center text-sm text-gray-500 sm:flex-1 sm:justify-center">
          <span>© {currentYear} Bright Gym. All rights reserved.</span>
          <span>
            Developed by{" "}
            <a
              href="https://www.shalops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-400 hover:text-primary transition-colors"
            >
              Shalops Digitals
            </a>
          </span>
        </div>
        <div className="flex flex-1 justify-center sm:justify-end">
          <Link
            href="/admin/login"
            className="text-gray-500 hover:text-primary transition-colors text-xs font-medium flex items-center gap-1"
            title="Admin portal"
          >
            <span className="material-symbols-outlined text-sm">lock</span>
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

