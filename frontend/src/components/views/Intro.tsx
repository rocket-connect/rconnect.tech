import { Container } from "../utils/Container";
import "../../css/intro.css";
import { Link } from "../utils/Link";

export function Intro() {
  return (
    <div className="bg-rocket-connect-darkblue w-full relative intro-stars overflow-hidden">
      <div className="star star0"></div>
      <Container>
        <div className="py-40">
          <div className="w-1/2">
            <h1 className="font-bold text-rocket-connect-lightgrey text-6xl text-white">
              The home of software solutions
            </h1>
            <p className="text-rocket-connect-lightgrey mt-5 text-white text-2xl italic">
              Rocket Connect's goal is to create software and tools for the
              benefit of society.
            </p>
            <p className="mt-5 text-2xl">
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
