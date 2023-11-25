import { Container } from "../utils/Container";
import { apiIcon, relationsIcon, openSourceIcon } from "../utils/images";

export const services = [
  {
    title: "API Engineering",
    link: "api-engineering",
    text: "Our team crafts efficient and Typesafe Node.js APIs using cutting-edge technologies to ensure scalability and high performance. We specialize in both REST and GraphQL standards, providing tailored solutions to meet your project's unique requirements. Our expertise extends to integrating with any of your databases, other backend systems, and authentication providers.",
    img: apiIcon,
  },
  {
    title: "Library Development",
    link: "library-development",
    text: "We are active contributors to open-source communities, aiming to enrich the development ecosystem with innovative solutions. Our team takes pride in creating and maintaining our own open-source projects, which can be found on platforms like GitHub. We leverage our collective expertise to develop libraries that streamline development processes, ensuring that our contributions drive progress.",
    img: openSourceIcon,
  },
  {
    title: "Developer Relations",
    link: "developer-relations",
    text: "Our engagement with the developer community is reflected in our participation in conferences, workshops, and industry events. We are committed to fostering knowledge exchange, learning from peers, and sharing insights, which helps us stay abreast of the latest trends.",
    img: relationsIcon,
  },
];

export function Services() {
  return (
    <section id="services">
      <div className="gradient-background bg-rocket-connect-darkblue w-full">
        <div className="py-20">
          <Container>
            <h2 className="font-semibold text-center text-3xl md:text-4xl text-rocket-connect-lightgrey">
              Services
            </h2>
            <div className="flex flex-col w-full lg:w-4/6 py-10 gap-10 mx-auto">
              {services.map((item, index) => (
                <section
                  key={item.title}
                  id={item.link}
                  className="pt-10 md:pt-20"
                >
                  <div
                    className={`flex flex-col md:flex-row gap-10 ${
                      index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                    key={item.title}
                  >
                    <div className="flex flex-col gap-10">
                      <h3 className="font-semibold underline text-2xl text-center text-rocket-connect-lightgrey">
                        {item.title}
                      </h3>
                      <img
                        className="w-28 md:w-52 mx-auto my-auto sm:my-none"
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <div className="md:mt-20 flex-1 mx-auto md:text-left text-rocket-connect-lightgrey">
                      <p className="sm:text-lg tracking-wider spacing-largest">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
