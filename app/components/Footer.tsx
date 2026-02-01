import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-dark-lighter bg-background-dark py-12 px-4 md:px-10 text-center md:text-left">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center justify-center md:justify-start gap-3 text-white hover:opacity-80 transition-opacity">
            <div className="size-10 relative">
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
            Forging fitness and community in Addis Ababa.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Packages</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link className="hover:text-primary transition-colors" href="/services">
                Group Fitness
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/services">
                BMI Fit Program
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/services">
                Body Building
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link className="hover:text-primary transition-colors" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Explore</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link className="hover:text-primary transition-colors" href="/services">
                Membership
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/register">
                Register Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-surface-dark-lighter flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 hidden sm:block" aria-hidden="true" />
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-sm text-gray-500">
            © {currentYear} Bright Gym. All rights reserved.
          </div>
          <div className="text-sm text-gray-500">
            Developed by{" "}
            <span className="font-medium text-gray-400">Shalops Digitals</span>
          </div>
        </div>
        <div className="flex-1 flex justify-end sm:justify-end">
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
