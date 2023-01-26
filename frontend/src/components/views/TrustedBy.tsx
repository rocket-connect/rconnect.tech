// @ts-ignore
import neo4j from "../../../public/neo4j.svg";
// @ts-ignore
import prisma from "../../../public/prisma.svg";
// @ts-ignore
import gqlVis from "../../../public/graphql-visualizer.svg";
import { Divider } from "../utils/Divider";

const trustedBy = [
  { logo: neo4j },
  { logo: prisma },
  {
    logo: gqlVis,
  },
];

export function TrustedBy() {
  return (
    <Divider>
      <div className="flex align-center justify-center">
        <p className="italic text-2xl text-rocket-connect-darkblue">
          Our team have been trusted by leading organizations
        </p>
      </div>
      <div className="flex align-center justify-between py-5">
        {trustedBy.map((item) => (
          <img className="h-12 my-5" src={item.logo} />
        ))}
      </div>
    </Divider>
  );
}
