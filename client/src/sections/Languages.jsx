export default function Languages() {
  return (
    <section
      id="languages"
      className="min-h-screen py-20 px-6 bg-zinc-50 dark:bg-zinc-900/40"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* LANGUAGES */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Languages We Teach In
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            Classes are conducted in multiple languages to ensure
            clarity and comfort for students across different regions.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {["Hindi","Urdu", "English", "Kannada"].map((lang) => (
              <div
                key={lang}
                className="rounded-2xl border bg-white dark:bg-zinc-900 p-6 text-center font-semibold hover:shadow transition"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>

        {/* COUNTRIES */}
        <div id="countries">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Countries We Serve
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            Online classes available for students across multiple
            countries with flexible timings.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {["India", "United Kingdom", "Arab countries", "Canada", "Australia","Japan"].map((country) => (
              <div
                key={country}
                className="rounded-2xl border bg-white dark:bg-zinc-900 p-6 text-center font-semibold hover:shadow transition"
              >
                {country}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
