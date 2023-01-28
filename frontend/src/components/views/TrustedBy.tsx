import { neo4j, prisma, gqlVis } from "../utils/images";
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
        <p className="text-center text-xs italic text-rocket-connect-darkblue">
          Our team have been trusted by leading organizations.
        </p>
      </div>
      <div className="flex align-center justify-between py-2">
        {trustedBy.map((item) => (
          <img className="h-4 md:h-6 xl:h-8 my-2" src={item.logo} />
        ))}
      </div>
    </Divider>
  );
}
