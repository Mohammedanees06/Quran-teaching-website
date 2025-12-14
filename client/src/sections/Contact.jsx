import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  GlobeIcon,
  CheckIcon
} from "../components/Icons";


export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact & Enrollment
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Interested in enrolling or have questions about our courses?
            Reach out to us and we’ll guide you with the most suitable
            learning plan.
          </p>

          <div className="space-y-6 text-base text-gray-700 dark:text-gray-300">

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <PhoneIcon />
              <p>
                <strong>WhatsApp:</strong> +91 9591155098 
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <MailIcon />
              <p>
                <strong>Email:</strong>  mz665380@gmail.com
              </p>
            </div>

            {/* Time */}
            <div className="flex items-start gap-4">
              <ClockIcon />
              <p>
                <strong>Class Timings:</strong> Flexible (IST & International)
              </p>
            </div>

            {/* Mode */}
            <div className="flex items-start gap-4">
              <GlobeIcon />
              <p>
                <strong>Mode:</strong> Online Classes
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-10 shadow-sm">
          <h3 className="text-2xl font-semibold mb-6">
            Why Choose Us?
          </h3>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">

            <li className="flex gap-4">
              <CheckIcon />
              Qualified & experienced teachers
            </li>

            <li className="flex gap-4">
              <CheckIcon />
              Personal attention to each student
            </li>

            <li className="flex gap-4">
              <CheckIcon />
              Structured and disciplined learning approach
            </li>

            <li className="flex gap-4">
              <CheckIcon />
              Suitable for children and adults
            </li>

            <li className="flex gap-4 font-semibold text-emerald-700 dark:text-emerald-300">
              <CheckIcon />
              Female students are guided by a qualified female teacher
            </li>

            <li className="flex gap-4">
              <CheckIcon />
              Global online availability
            </li>

          </ul>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block w-full text-center rounded-xl
                       bg-emerald-600 px-6 py-3 font-semibold text-white
                       hover:bg-emerald-700 transition"
          >
            Enroll via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
