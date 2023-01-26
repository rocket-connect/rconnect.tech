import { Container } from "../utils/Container";
import { Link } from "../utils/Link";

export function Join() {
  return (
    <div className="bg-rocket-connect-lightgrey w-full">
      <div className="py-10">
        <Container>
          <h2 className="font-bold text-center text-rocket-connect-darkblue text-5xl">
            Join our mission!
          </h2>
          <div className="flex align-center flex-col justify-center mt-10 text-center text-2xl italic text-rocket-connect-darkblue h-80">
            <p className="mx-auto p-2 bg-rocket-connect-yellow w-2/5 ">
              We are seeking individuals with
            </p>
            <p className="mx-auto p-3 bg-rocket-connect-yellow w-1/3">
              similar perspectives to join our team.
            </p>
          </div>

          <p className="mt-10 text-2xl text-center">
            <Link color="darkblue" content="Join" href="email"></Link>
          </p>
        </Container>
      </div>
    </div>
  );
}
