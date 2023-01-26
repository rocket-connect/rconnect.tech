import { Container } from "../utils/Container";
// @ts-ignore
import relationsIcon from "../../../public/relations-icon.svg";
// @ts-ignore
import openSourceIcon from "../../../public/opensource-icon.svg";
// @ts-ignore
import teamIcon from "../../../public/team-icon.svg";
import { Link } from "../utils/Link";
import { Dot } from "../utils/Dot";

const services = [
  {
    title: "Developer relations",
    img: relationsIcon,
    info: "Leverage our network to boost your community presence.",
  },
  {
    title: "Open source",
    img: openSourceIcon,
    info: "Expand your reach by developing software with us.",
  },
  {
    title: "Extension to your team",
    img: teamIcon,
    info: "Let's work together, we can join your engineering team.",
  },
];

export function HowWeCanHelpYou() {
  return (
    <div className="bg-rocket-connect-darkblue w-full">
      <div className="py-10">
        <Container>
          <h2 className="font-bold text-center text-white text-5xl text-rocket-connect-lightgrey">
            How we can help you
          </h2>
          <p className="mt-5 text-center">
            <a
              className="text-rocket-connect-lightblue"
              href="mailto:launch@rocketconnect.co.uk"
            >
              launch@rocketconnect.co.uk
            </a>
          </p>
          <div className="flex align-center justify-between py-10">
            {services.map((item) => (
              <div className="text-white flex flex-col">
                <h3 className="font-bold text-center text-white text-3xl text-rocket-connect-lightgrey">
                  {item.title}
                  {Dot()}
                </h3>
                <p className="mt-5 text-center italic max-w-xs text-rocket-connect-lightgrey">
                  {item.info}
                </p>
                <img className="h-32 my-20" src={item.img} alt={item.title} />
              </div>
            ))}
          </div>
          <p className="mt-5 text-2xl text-center">
            <Link
              color="white"
              content="Services"
              href="shj"
              lightGrey={true}
            ></Link>
          </p>
        </Container>
      </div>
    </div>
  );
}
