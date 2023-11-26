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
  bangkokImg,
  singaporeImg,
  puneImg,
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

const realLifeImages = [
  {
    img: bangkokImg,
    text: "GraphQL Bangkok",
    link: "https://www.meetup.com/graphql-bangkok",
  },
  {
    img: singaporeImg,
    text: "GraphQL Singapore",
    link: "https://www.meetup.com/graphql-sg",
  },
  {
    img: puneImg,
    text: "DevTools Pune",
    link: "https://guild.host/events/devtools-pune-november-l34x7a",
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
                    className="h-6 mx-auto"
                    src={item.logo}
                    alt={item.text}
                  />
                </a>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-10 mt-10">
              {realLifeImages.map((item, index) => (
                <div key={index} className="flex flex-col flex-1 gap-3">
                  <img className="w-full" src={item.img} alt={item.text} />
                  <p className="text-center">
                    <a
                      className="italic underline hover:opacity-75"
                      href={item.link}
                    >
                      {item.text}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
