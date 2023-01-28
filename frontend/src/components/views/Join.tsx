import { Container } from "../utils/Container";
import { Link } from "../utils/Link";

export function Join() {
  return (
    <div className="bg-rocket-connect-lightgrey w-full">
      <div className="py-20">
        <Container>
          <h2 className="font-bold text-center text-rocket-connect-darkblue text-3xl xl:text-4xl">
            Join our mission!
          </h2>
          <div className="flex align-center flex-col justify-center mt-5 md:mt-10 text-center md:text-2xl italic text-rocket-connect-darkblue h-80">
            <p className="mx-auto p-2 bg-rocket-connect-yellow w-4/5 lg:w-2/5">
              We are seeking individuals with
            </p>
            <p className="mx-auto p-3 bg-rocket-connect-yellow w-3/5 lg:w-1/3">
              similar perspectives.
            </p>
          </div>

          <p className="mt-5 md:mt-10 text-center">
            <Link color="darkblue" content="Join" href="email"></Link>
          </p>
        </Container>
      </div>
    </div>
  );
}
