import About from "@/components/About";
import BeyondCode from "@/components/BeyondCode";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Recognition />
      <BeyondCode />
      <Contact />
    </>
  );
}
