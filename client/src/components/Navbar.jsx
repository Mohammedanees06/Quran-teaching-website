import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

 
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200/60 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="text-xl font-bold tracking-wide">
            <span className="text-emerald-600">Al</span> Fajar Academy
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-600 transition">
              About
            </a>
            <a href="#courses" className="hover:text-emerald-600 transition">
              Courses
            </a>
            
            
            <a href="#contact" className="hover:text-emerald-600 transition">
              Contact
            </a>
            <a href="#fees" className="hover:text-emerald-600 transition">
            Pricing 
            </a>

          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="rounded-full border px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-block rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
