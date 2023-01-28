import { Container } from "../utils/Container";
import "../../css/intro.css";
import { Link } from "../utils/Link";

export function Intro() {
  return (
    <div className="bg-rocket-connect-darkblue overflow-hidden">
      <div className="star star0"></div>
      <Container>
        <div className="">
          <div className="py-24 lg:py-32 w-100 lg:w-3/5">
            <h1 className="text-center lg:text-left font-bold text-rocket-connect-lightgrey text-white text-4xl sm:text-5xl lg:text-6xl">
              The home of software solutions
            </h1>
            <p className="mt-5 mx-auto text-center lg:mx-0 lg:text-left w-3/5 text-rocket-connect-lightgrey text-white italic">
              At Rocket Connect our goal is to create software and tools for the
              benefit of society.
            </p>
            <p className="mx-auto text-center lg:text-left mt-5">
              <Link
                color="white"
                content="Contact"
                href="email"
                lightGrey={true}
              ></Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
