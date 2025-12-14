import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hadith from "../sections/Hadith";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Courses from "../sections/Courses";
import Languages from "../sections/Languages";
import Contact from "../sections/Contact";
import Fees from "../sections/Fees";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Hadith />
        <About />
        <Courses />
        <Fees />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
