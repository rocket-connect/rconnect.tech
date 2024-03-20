import { TrustedBy } from "../views/TrustedBy";
import { Intro } from "../views/Intro";
import { Services } from "../views/Services";
import { Contact } from "../views/Contact";
import { Footer } from "../views/Footer";

export function Home() {
  return (
    <section id="home">
      <Intro />
      <Services />
      <TrustedBy />
      <Footer />
    </section>
  );
}
