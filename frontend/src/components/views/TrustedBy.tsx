import {
  neo4j,
  prisma,
  gqlVis,
  cityjs,
  bobsled,
  pabau,
  meta,
  gqlBangkok,
  gqlSingapore,
  gqlLondon,
  hasura,
  debuggerIcon,
} from "../utils/images";
import { Container } from "../utils/Container";

const trustedBy = [
  { logo: neo4j, text: "Neo4j", link: "https://neo4j.com" },
  { logo: prisma, text: "Prisma", link: "https://www.prisma.io" },
  { logo: meta, text: "Meta", link: "https://www.meta.com/" },
  { logo: hasura, text: "Hasura", link: "https://hasura.io/" },
  {
    logo: gqlLondon,
    text: "GraphQL London",
    link: "https://guild.host/graphql-london/events",
  },
  {
    logo: gqlSingapore,
    text: "GraphQL Singapore",
    link: "https://www.meetup.com/graphql-sg",
  },
  { logo: cityjs, text: "City JS Conference", link: "https://cityjsconf.org/" },
  { logo: bobsled, text: "Bobsled", link: "https://bobsled.co" },
  {
    logo: gqlVis,
    text: "Graphql Visualizer",
    link: "https://graphqlvisualizer.com",
  },
  {
    logo: gqlBangkok,
    text: "GraphQL Bangkok",
    link: "https://www.meetup.com/graphql-bangkok",
  },
  { logo: pabau, text: "Pabau", link: "https://pabau.com" },
  {
    logo: debuggerIcon,
    text: "GraphQL Debugger",
    link: "https://www.graphql-debugger.com",
  },
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
            <p className="text-center text-lg italic text-rocket-connect-darkblue">
              Our team has been trusted by leading organizations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-10">
              {trustedBy.map((item, index) => (
                <a href={item.link} about={item.text} key={index}>
                  <img
                    loading="lazy"
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
