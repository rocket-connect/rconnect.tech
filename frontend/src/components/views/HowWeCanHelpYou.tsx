import { Container } from "../utils/Container";
import { relationsIcon, openSourceIcon, teamIcon } from "../utils/images";
import { Link } from "../utils/Link";
import { Dot } from "../utils/Dot";

const services = [
  {
    title: "DevRel",
    img: relationsIcon,
    info: "Leverage our network to boost your presence.",
  },
  {
    title: "Open source",
    img: openSourceIcon,
    info: "Expand your reach by developing software with us.",
  },
  {
    title: "Join your team",
    img: teamIcon,
    info: "Let's work together, we can join your engineering team.",
  },
];

export function HowWeCanHelpYou() {
  return (
    <div className="bg-rocket-connect-darkblue w-full">
      <div className="py-20">
        <Container>
          <h2 className="font-bold text-center text-white text-4xl xl:text-5xl text-rocket-connect-lightgrey">
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
          <div className="flex flex-col xl:flex-row align-center justify-between py-20">
            {services.map((item, i) => (
              <div className="text-white flex flex-col">
                <h3 className="font-bold text-center text-white text-3xl text-rocket-connect-lightgrey">
                  {item.title}
                  {Dot()}
                </h3>
                <p className="mt-10 text-center italic mx-auto xl:mx-0 max-w-xs text-rocket-connect-lightgrey">
                  {item.info}
                </p>
                <img className="h-32 my-20" src={item.img} alt={item.title} />

                {Boolean(i !== services.length - 1) && (
                  <hr className="xl:hidden w-4/6 mx-auto mb-20"></hr>
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 text-center">
            <Link
              color="white"
              content="Contact"
              href="email"
              lightGrey={true}
            ></Link>
          </p>
        </Container>
      </div>
    </div>
  );
}
