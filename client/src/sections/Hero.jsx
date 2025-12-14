export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span
            className="inline-block mt-14 sm:mt-24 md:mt-0  mb-4 rounded-full
           bg-emerald-100 dark:bg-emerald-900/40
            px-4 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300 "  >
            Online Quran Education
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] font-extrabold leading-tight mb-6">
            Learn Quran with{" "}
            <span className="text-emerald-600">Tajweed & Hifz</span> Worldwide
            from Experienced Scholars
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Learn Quran online with qualified{" "}
            <span className="font-semibold text-emerald-700 dark:text-emerald-300">
              Male & Female
            </span>{" "}
            Hafiz and Qari teachers, bringing over{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              10+ years
            </span>{" "}
            of teaching experience. Carefully structured courses for kids and
            adults, delivered with care, accuracy, and discipline.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#courses"
              className="rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700 transition"
            >
              View Courses
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-6 py-3 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="rounded-3xl bg-linear-to-br from-emerald-500/20 to-emerald-700/20 p-10">
            <div className="rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-xl">
              <ul className="space-y-4 text-base">
                <li>✔ Noorani Qaida</li>
                <li>✔ Quran with Tajweed</li>
                <li>✔ Quran Hifz</li>
                <li>✔ Daily Duas & Hadees</li>
                <li>✔ Islamic General Knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
