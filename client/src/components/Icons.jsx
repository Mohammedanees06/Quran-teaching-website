// Icons.jsx

const iconBase =
  "h-6 w-6 text-emerald-600 flex-shrink-0 mt-1";

export function PhoneIcon({ className = "" }) {
  return (
    <svg className={`${iconBase} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-2.318a2.25 2.25 0 00-1.664-2.182l-2.72-.68a2.25 2.25 0 00-2.622 1.088l-.422.703a12.036 12.036 0 01-5.516-5.516l.703-.422a2.25 2.25 0 001.088-2.622l-.68-2.72A2.25 2.25 0 006.568 2.25H4.25A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export function MailIcon({ className = "" }) {
  return (
    <svg className={`${iconBase} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        d="M21.75 7.5l-9.75 6.75L2.25 7.5M3.75 18h16.5A1.5 1.5 0 0021.75 16.5V7.5A1.5 1.5 0 0020.25 6H3.75A1.5 1.5 0 002.25 7.5v9A1.5 1.5 0 003.75 18z" />
    </svg>
  );
}

export function ClockIcon({ className = "" }) {
  return (
    <svg className={`${iconBase} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
    </svg>
  );
}

export function GlobeIcon({ className = "" }) {
  return (
    <svg className={`${iconBase} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 0c2.485 2.485 2.485 14.515 0 18m0-18c-2.485 2.485-2.485 14.515 0 18m-7.5-9h15" />
    </svg>
  );
}
export function CheckIconn() {
  return (
    <svg
      className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export function CheckIcon({ className = "" }) {
  return (
    <svg className={`h-5 w-5 text-emerald-600 shrink-0 mt-1 ${className}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        d="M5 13l4 4L19 7" />
    </svg>
  );
}
