import { SiteHeader } from "./components/SiteHeader";
import { About } from "./sections/About";
import { BeyondCode } from "./sections/BeyondCode";
import { Contact } from "./sections/Contact";
import { Home } from "./sections/Home";
import { Projects } from "./sections/Projects";
import { Timeline } from "./sections/Timeline";

export function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Home />
        <Timeline />
        <Projects />
        <About />
        <BeyondCode />
        <Contact />
      </main>
    </>
  );
}