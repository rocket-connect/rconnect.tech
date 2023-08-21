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
            <p className="text-center md:text-xl italic text-rocket-connect-darkblue">
              Our team has been trusted by leading organizations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-10">
              {trustedBy.map((item, index) => (
                <a href={item.link} about={item.text} key={index}>
                  <img
                    className="h-6 mx-auto"
                    src={item.logo}
                    alt={item.text}
                  />
                </a>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
