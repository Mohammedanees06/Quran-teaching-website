import { CheckIconn } from "../components/Icons";

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Our Quran Courses
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Carefully designed courses to help students of all levels
            learn Quran with proper understanding and pronunciation.
          </p>
        </div>

        {/* COURSES GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Noorani Qaida",
              desc:
                "A beginner-friendly course to build strong basics in Arabic letters, pronunciation, and reading skills.",
              points: [
                "For beginners & kids",
                "Step-by-step learning",
                "Strong foundation",
              ],
            },
            {
              title: "Quran with Tajweed",
              desc:
                "Learn Quran recitation with correct Tajweed rules, makharij, and proper rhythm.",
              points: [
                "Correct pronunciation",
                "Tajweed rules explained",
                "Regular practice",
              ],
            },
            {
              title: "Quran Hifz",
              desc:
                "Structured memorization program with daily revision plans and guidance.",
              points: [
                "Daily memorization",
                "Revision tracking",
                "Long-term retention",
              ],
            },
            {
              title: "Daily Duas & Hadees",
              desc:
                "Learn essential daily Duas and selected Hadees with meaning and usage.",
              points: [
                "Daily life Duas",
                "Authentic sources",
                "Easy memorization",
              ],
            },
            {
              title: "Deeni Masail",
              desc:
                "Understand everyday Islamic rulings and practices explained in a simple manner.",
              points: [
                "Practical knowledge",
                "Easy explanations",
                "Q&A sessions",
              ],
            },
            {
              title: "Islamic General Knowledge",
              desc:
                "Build strong Islamic awareness through stories, quizzes, and interactive learning.",
              points: [
                "For kids & adults",
                "Interactive sessions",
                "Moral development",
              ],
            },
          ].map((course) => (
            <div
              key={course.title}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800
                         bg-zinc-50 dark:bg-zinc-900 p-8
                         hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {course.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {course.desc}
              </p>

              <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
                {course.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckIconn className="h-6 w-6 text-emerald-600 mt-0.5" />
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
