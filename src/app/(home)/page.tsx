import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Portfolio } from "./components/portfolio";
import { Experience } from "./components/experience";
import { Contact } from "./components/contact";

export default () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
    </main>
  );
};
