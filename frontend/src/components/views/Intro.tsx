import { Container } from "../utils/Container";
import "../../css/intro.css";
import { Link } from "../utils/Link";

export function Intro() {
  return (
    <div className="pt-12 gradient-background bg-rocket-connect-darkblue overflow-hidden">
      <div className="star star0"></div>
      <Container>
        <div className="py-24 lg:py-32 w-100 lg:w-3/5">
          <h1 className="text-left font-bold text-rocket-connect-lightgrey text-white text-3xl xl:text-6xl">
            We build APIs and open-source libraries.
          </h1>
          <p className="mt-5 text-rocket-connect-lightgrey text-white italic">
            Rocket Connect's goal is to create software and tools for the
            benefit of society.
          </p>
          <p className="mt-5">
            <Link
              color="white"
              content="Contact"
              href="email"
              lightGrey={true}
            ></Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
