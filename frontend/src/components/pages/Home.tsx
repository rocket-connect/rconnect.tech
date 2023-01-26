import { TrustedBy } from "../views/TrustedBy";
import { Intro } from "../views/Intro";
import { HowWeCanHelpYou } from "../views/HowWeCanHelpYou";
import { Projects } from "../views/Projects";
import { Join } from "../views/Join";
import { Contact } from "../views/Contact";
import { Footer } from "../views/Footer";

export function Home() {
  return (
    <div>
      <Intro />
      <TrustedBy />
      <HowWeCanHelpYou />
      <Projects />
      <Join />
      <Contact />
      <Footer />
    </div>
  );
}
