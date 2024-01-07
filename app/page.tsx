import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDiveder from "@/components/section-diveder";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDiveder />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
