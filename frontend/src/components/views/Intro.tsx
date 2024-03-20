import { Container } from "../utils/Container";

export function Intro() {
  return (
    <div className="overflow-hidden">
      <Container>
        <div className="pt-24 pb-48 flex flex-col align-center justify-center w-5/5 md:w-4/5 lg:w-3/5 mx-auto">
          <h1 className="text-center font-bold text-rocket-connect-darkblue text-4xl md:text-5xl xl:text-6xl">
            We connect people through open source.
          </h1>
        </div>
      </Container>
    </div>
  );
}
