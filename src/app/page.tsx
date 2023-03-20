import styles from "./page.module.css";
import Hero from "@/components/organism/Hero";
import Navbar from "@/components/organism/Navbar";
import AboutMe from "@/components/organism/AboutMe";
import Skills from "@/components/organism/Skills";
import FeaturedPortfolio from "@/components/organism/FeaturedPortfolio";
import Contact from "@/components/organism/Contact";
import Footer from "@/components/organism/Footer";

export default function Home() {
  return (
    <>
      <header className="w-screen py-[24px] sticky backdrop-blur-[24px] border-b border-[#d4d4d4] mx-auto">
        <Navbar />
      </header>
      <main className={`${styles.main} px-[16px] md:px-[16px] lg:px-[32px]`}>
        <section
          id="home"
          className="container mx-auto md:max-x-5xl lg:max-w-[896px] xl:max-w-6xl py-[100px] md:py-[200px]"
        >
          <Hero />
        </section>
        <section
          id="aboutme"
          className="container mx-auto lg:max-w-5xl max- xl:max-w-6xl py-6 md:py-[120px]"
        >
          <AboutMe />
        </section>
        <section
          id="myskills"
          className="container mx-auto lg:max-w-5xl max- xl:max-w-6xl py-6 md:py-[120px]"
        >
          <Skills />
        </section>
        <section
          id="projects"
          className="container mx-auto lg:max-w-5xl max- xl:max-w-6xl py-6 md:py-[120px]"
        >
          <FeaturedPortfolio />
        </section>
        <section
          id="contact"
          className="container mx-auto lg:max-w-5xl max- xl:max-w-6xl py-[100px] md:py-[120px]"
        >
          <Contact />
        </section>
        <section
          id="footer"
          className="container mx-auto lg:max-w-5xl max- xl:max-w-6xl py-[0px]"
        >
          <Footer />
        </section>
      </main>
    </>
  );
}
