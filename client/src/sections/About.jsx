export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 bg-zinc-50 dark:bg-zinc-900/40"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About the Instructor
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Al Fajar Online Quran Academy is guided by Hafiz & Qari Mohammad
            Zubair, who has over <strong>10 years of experience</strong> in
            Quran teaching. Along with other qualified instructors, the academy
            ensures disciplined, accurate, and meaningful Quran learning for
            students of all ages.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            The courses are designed for beginners as well as advanced learners,
            covering Noorani Qaida, Tajweed, Quran Hifz, daily Duas, Hadees,
            Deeni Masail, and Islamic general knowledge.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white dark:bg-zinc-900 p-6 border">
              <h3 className="text-3xl font-bold text-emerald-600">10+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl bg-white dark:bg-zinc-900 p-6 border">
              <h3 className="text-3xl font-bold text-emerald-600">5000+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Students Guided
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL CARD */}
        <div className="rounded-3xl bg-white dark:bg-zinc-900 p-10 border shadow-sm">
          <h3 className="text-2xl font-semibold mb-6">Teaching Highlights</h3>

          <ul className="space-y-4 text-base text-gray-700 dark:text-gray-300">
            <li>✔ One-to-one and group online classes</li>
            <li>✔ Proper Tajweed rules and pronunciation</li>
            <li>✔ Structured learning for kids & adults</li>
            <li>✔ Regular revision and assessments</li>
            <li className="font-semibold text-emerald-600">
              ✔ Dedicated female teacher for female students
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
