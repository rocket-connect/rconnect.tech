import { neo4j, prisma, gqlVis } from "../utils/images";
import { Container } from "../utils/Container";

const trustedBy = [
  { logo: neo4j },
  { logo: prisma },
  { logo: gqlVis },
  { logo: neo4j }, // Duplicate
  { logo: prisma }, // Duplicate
  { logo: gqlVis }, // Duplicate
];

export function TrustedBy() {
  return (
    <section
      key="Trusted"
      id="trusted"
      about="Companies that trust Rocket Connect"
    >
      <div className="w-full">
        <div className="py-10">
          <Container>
            <div className="mx-auto">
              <p className="text-center md:text-xl italic text-rocket-connect-darkblue">
                Our team have been trusted by leading organizations.
              </p>
              <div className="flex flex-wrap items-center justify-between mt-20 mx-auto gap-10">
                {trustedBy.map((item, index) => (
                  <img
                    key={index}
                    className="h-6 my-2"
                    src={item.logo}
                    alt={`Logo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
