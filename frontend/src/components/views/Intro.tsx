import { Container } from "../utils/Container";
import { socials } from "./Contact";

export function Intro() {
  return (
    <div className="overflow-hidden">
      <Container>
        <div className="w-full flex flex-col">
          <div className="py-24 flex flex-col align-center justify-center w-5/5 md:w-4/5 lg:w-3/5 mx-auto">
            <h1 className="text-center font-bold text-rocket-connect-darkblue text-4xl md:text-5xl xl:text-6xl">
              We connect people through open source.
            </h1>
          </div>

          <div className="flex mx-auto gap-10 pb-24">
            {socials.map((item, index) => (
              <a key={index} href={item.url} className="hover:opacity-75">
                <img className="h-8" src={item.logoDark} alt="Social Logo" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
