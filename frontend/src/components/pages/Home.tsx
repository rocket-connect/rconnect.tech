import { TrustedBy } from "../views/TrustedBy";
import { Intro } from "../views/Intro";
import { HowWeCanHelpYou } from "../views/HowWeCanHelpYou";
import { Join } from "../views/Join";
import { Contact } from "../views/Contact";
import { Footer } from "../views/Footer";
import { ZWord } from "../views/ZWord";
import { OTEL } from "../views/OTEL";

export function Home() {
  return (
    <section id="home">
      <Intro />
      <TrustedBy />
      <HowWeCanHelpYou />
      <ZWord />
      <OTEL />
      <Join />
      <Contact />
      <Footer />
    </section>
  );
}
