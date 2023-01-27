import { github, spreadzword } from "../utils/images";
import { Divider } from "../utils/Divider";

const trustedBy = [
  { logo: github, url: "https://github.com/rocket-connect" },
  { logo: spreadzword, url: "https://spreadzword.com" },
  {
    logo: github,
    url: "https://github.com/rocket-connect",
  },
];

export function Projects() {
  return (
    <Divider>
      <div className="flex align-center justify-center">
        <p className="text-center italic text:sm xl:text-2xl text-rocket-connect-darkblue">
          Creating software and tools for the benefit of society.
        </p>
      </div>
      <div className="flex align-center justify-between py-5">
        {trustedBy.map((item) => (
          <a href={item.url}>
            <img className="h-4 md:h-8 xl:h-12 my-5" src={item.logo} />
          </a>
        ))}
      </div>
    </Divider>
  );
}
