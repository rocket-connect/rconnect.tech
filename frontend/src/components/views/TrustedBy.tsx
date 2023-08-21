import { neo4j, prisma, gqlVis, cityjs, bobsled, pabau } from "../utils/images";
import { Container } from "../utils/Container";

const trustedBy = [
  { logo: neo4j, text: "Neo4j", link: "https://neo4j.com" },
  { logo: prisma, text: "Prisma", link: "https://www.prisma.io" },
  {
    logo: gqlVis,
    text: "Graphql Visualizer",
    link: "https://graphqlvisualizer.com",
  },
  { logo: cityjs, text: "City JS Conference", link: "https://cityjsconf.org/" },
  { logo: bobsled, text: "Bobsled", link: "https://bobsled.co" },
  { logo: pabau, text: "Pabau", link: "https://pabau.com" },
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
              <div className="flex flex-wrap items-center justify-between mt-10 mx-10 gap-10">
                {trustedBy.map((item, index) => (
                  <a href={item.link} about={item.text}>
                    <img
                      key={index}
                      className="h-6 my-2"
                      src={item.logo}
                      alt={item.text}
                    />
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
