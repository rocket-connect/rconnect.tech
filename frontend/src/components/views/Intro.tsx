import { Container } from "../utils/Container";

export function Intro() {
  return (
    <div className="overflow-hidden">
      <Container>
        <div className="py-24 flex flex-col align-center justify-center w-5/5 md:w-4/5 lg:w-3/5 mx-auto">
          <h1 className="text-center font-bold text-rocket-connect-darkblue text-4xl md:text-5xl xl:text-6xl">
            We build APIs and open source libraries.
          </h1>

          <a href="#contact" className="mx-auto mt-20 hover:opacity-75">
            <button
              type="button"
              className="bg-rocket-connect-darkblue text-white font-bold px-8 lg:px-12 py-2 lg:py-3"
            >
              Contact
            </button>
          </a>
        </div>
      </Container>
    </div>
  );
}
