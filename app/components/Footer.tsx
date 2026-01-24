import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-surface-dark-lighter bg-background-dark py-12 px-4 md:px-10 text-center md:text-left">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white">
            <div className="size-6 text-primary">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h3 className="font-bold text-xl">Bright Gym</h3>
          </div>
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
              <Link className="hover:text-primary" href="#">
                Careers
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Classes</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link className="hover:text-primary" href="#">
                Strength
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                Yoga
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                HIIT
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Visit Us</h4>
          <p className="text-sm text-gray-400">Ayat 49, Addis Ababa</p>
          <p className="text-sm text-gray-400 mt-2">Mon-Sun: 6:00 AM - 8:45 PM</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-surface-dark-lighter flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left text-sm text-gray-500">
          © {currentYear} Bright Gym. All rights reserved.
        </div>
        <Link
          href="/admin/login"
          className="text-gray-500 hover:text-primary transition-colors text-xs font-medium flex items-center gap-1"
          title="Admin portal"
        >
          <span className="material-symbols-outlined text-sm">lock</span>
          <span>Admin</span>
        </Link>
      </div>
    </footer>
  );
}

