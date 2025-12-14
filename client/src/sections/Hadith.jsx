import { useEffect, useState } from "react";

const hadiths = [
  {
    text: "The best among you are those who learn the Qur’an and teach it.",
    source: "Sahih al-Bukhari",
  },
  {
    text: "Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise.",
    source: "Sahih Muslim",
  },
  {
    text: "When a person dies, his deeds end except three: ongoing charity, beneficial knowledge, or a righteous child who prays for him.",
    source: "Sahih Muslim",
  },
  {
    text: "Seeking knowledge is an obligation upon every Muslim.",
    source: "Sunan Ibn Majah",
  },
  {
    text: "Allah, His angels, the inhabitants of the heavens and the earth—even the ant in its hole and the fish in the sea—send blessings upon the one who teaches people good.",
    source: "Jamiʿ at-Tirmidhi",
  },
  {
    text: "The superiority of the scholar over the worshipper is like the superiority of the moon over the rest of the stars.",
    source: "Sunan Abu Dawood",
  },
  {
    text: "Convey from me, even if it is only one verse.",
    source: "Sahih al-Bukhari",
  },
  {
    text: "The one who guides to something good has a reward similar to that of its doer.",
    source: "Sahih Muslim",
  },
];

export default function Hadith() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % hadiths.length);
        setVisible(true);
      }, 800);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentHadith = hadiths[index];

  return (
    <section
      id="hadith"
      className="
        pt-24 sm:pt-28 md:pt-20 mt-4
        pb-20 px-6
        bg-emerald-50 dark:bg-emerald-900/20
      "
    >
      <div className="max-w-4xl mx-auto text-center">

        <p
          className={`
            text-lg sm:text-xl md:text-3xl
            font-medium leading-relaxed
            text-gray-900 dark:text-gray-100
            transition-all duration-1000 ease-in-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
        >
          “{currentHadith.text}”
        </p>

        <p
          className={`
            mt-4 sm:mt-6
            text-xs sm:text-sm
            font-semibold
            text-emerald-700 dark:text-emerald-300
            transition-opacity duration-1000
            ${visible ? "opacity-100" : "opacity-0"}
          `}
        >
          • {currentHadith.source}
        </p>

      </div>
    </section>
  );
}
