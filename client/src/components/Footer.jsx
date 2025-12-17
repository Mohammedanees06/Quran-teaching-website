import { GlobeIcon } from "../components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" bg-linear-to-b from-zinc-50 via-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          {/* BRAND */}
          <div className="md:pr-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-gray-900 dark:text-gray-100">
              <span className="text-emerald-600">Al</span> FajraQ Academy
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-md">
              Authentic Quran education with Tajweed, Hifz, and Islamic studies,
              delivered through structured, small-group online classes for
              students worldwide.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:px-4">
            <h4 className="text-xs font-semibold mb-4 uppercase tracking-[0.2em] text-gray-900 dark:text-gray-100">
              Quick links
            </h4>

            <nav
              aria-label="Footer navigation"
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm"
            >
              <ul className="divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-gray-700 dark:text-gray-300">
                {[
             { label: "About", href: "#about" },
            { label: "Courses", href: "#courses" },
             { label: "Why Choose Us", href: "#contact" },
           { label: "Pricing", href: "#fees" },
            { label: "Contact", href: "#contact" },].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between px-5 py-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-xs">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CONTACT */}
          <div className="md:pl-4">
            <h4 className="text-xs font-semibold mb-4 uppercase tracking-[0.2em] text-gray-900 dark:text-gray-100">
              Contact
            </h4>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm px-5 py-4">
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Email:
                  </span>{" "}
                  <a
                    href="mailto:alfajra.onlineacademy@gmail.com"
                    className="hover:text-emerald-600 transition-colors break-all"
                  >
                    alfajra.onlineacademy@gmail.com
                  </a>
                </li>

                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Phone:
                  </span>{" "}
                  <a
                    href="tel:+919591155098"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    +91 95911 55098
                  </a>
                </li>

                <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200 font-medium">
                  <GlobeIcon className="text-emerald-600" />
                  <span>Online classes – worldwide</span>
                </li>
              </ul>

              <a
                href="https://wa.me/919591155098"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-emerald-600 hover:text-emerald-500 hover:underline"
              >
                <span>Chat on WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-4 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <p>© {year} Al FajraQ Academy. All rights reserved.</p>
          <p className="mt-1">
            Dedicated to nurturing Quran learners across the globe.
          </p>
        </div>
      </div>
    </footer>
  );
}
