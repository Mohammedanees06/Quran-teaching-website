import { CheckIcon } from "../components/Icons";

export default function Fees() {
  return (
    <section
      id="fees"
      className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/40"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Fees & Class Plans
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Choose a learning plan based on your availability.
            All plans include a free demo class before enrollment.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* STARTER */}
          <div className="rounded-3xl border bg-white dark:bg-zinc-900 p-8 text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Starter Plan
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Ideal for beginners & kids
            </p>

            <div className="text-4xl font-bold text-emerald-600 mb-6">
              $15<span className="text-base font-medium text-gray-600 dark:text-gray-400"> / month</span>
            </div>

            <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200 mb-8 text-left">
              <li className="flex gap-3"><CheckIcon /> 3 days per week</li>
              <li className="flex gap-3"><CheckIcon /> 30 minutes per class</li>
              <li className="flex gap-3"><CheckIcon /> One-to-one online</li>
              <li className="flex gap-3"><CheckIcon /> Free demo class</li>
            </ul>
          </div>

          {/* STANDARD  */}
          <div className="rounded-3xl border-2 border-emerald-600 bg-white dark:bg-zinc-900 p-8 text-center scale-[1.02]">
            <span className="inline-block mb-3 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              MOST CHOSEN
            </span>

            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Standard Plan
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Best for regular learners
            </p>

            <div className="text-4xl font-bold text-emerald-600 mb-6">
              $22<span className="text-base font-medium text-gray-600 dark:text-gray-400"> / month</span>
            </div>

            <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200 mb-8 text-left">
              <li className="flex gap-3"><CheckIcon /> 6 days per week</li>
              <li className="flex gap-3"><CheckIcon /> 30 minutes per class</li>
              <li className="flex gap-3"><CheckIcon /> One-to-one online</li>
              <li className="flex gap-3 font-semibold text-emerald-700"><CheckIcon /> Free demo class</li>
            </ul>
          </div>

          {/* INTENSIVE */}
          <div className="rounded-3xl border bg-white dark:bg-zinc-900 p-8 text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Intensive Plan
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Ideal for Hifz & fast progress
            </p>

            <div className="text-4xl font-bold text-emerald-600 mb-6">
              $33<span className="text-base font-medium text-gray-600 dark:text-gray-400"> / month</span>
            </div>

            <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200 mb-8 text-left">
              <li className="flex gap-3"><CheckIcon /> 6 days per week</li>
              <li className="flex gap-3"><CheckIcon /> 60 minutes per class</li>
              <li className="flex gap-3"><CheckIcon /> One-to-one online</li>
              <li className="flex gap-3"><CheckIcon /> Free demo class</li>
            </ul>
          </div>

        </div>

        {/* FOOT NOTE */}
        <p className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
          Female teachers are available for girls and women. Special discounts for siblings may apply.
        </p>

      </div>
    </section>
  );
}
