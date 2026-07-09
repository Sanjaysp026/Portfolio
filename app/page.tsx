import { Contact } from "@/components/sections/Contact";
import { Exploring } from "@/components/sections/Exploring";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Exploring />
      <Contact />
    </main>
  );
}
