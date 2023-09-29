import { Container } from "../utils/Container";
import { apiIcon, relationsIcon, openSourceIcon } from "../utils/images";

export const services = [
  {
    title: "API Engineering",
    link: "api-engineering",
    points: [
      "Craft efficient and Typesafe Node.js APIs using cutting-edge technologies, ensuring scalability and high performance.",
      "Specialize in both REST and GraphQL standards, providing tailored solutions to meet your project's requirements.",
      "Integrate with any of your databases, other backend systems, and authentication providers.",
    ],
    img: apiIcon,
  },
  {
    title: "Library Development",
    link: "library-development",
    points: [
      "Actively contribute to open-source communities, enriching the development ecosystem with innovative solutions.",
      "Create and maintain our own open-source projects on platforms like GitHub.",
      "Leverage our collective expertise to develop libraries that streamline development processes.",
    ],
    img: openSourceIcon,
  },
  {
    title: "Developer Relations",
    link: "developer-relations",
    points: [
      "Engage with the developer community through participation in conferences, workshops, and industry events.",
      "Foster knowledge exchange, learning from peers, and sharing insights to stay updated with the latest trends.",
      "Showcase our commitment to continuous learning and improvement, offering clients solutions built on the freshest insights.",
    ],
    img: relationsIcon,
  },
];

export function Services() {
  return (
    <section id="services">
      <div className="gradient-background bg-rocket-connect-darkblue w-full">
        <div className="py-20">
          <Container>
            <h2 className="font-semibold text-center text-4xl lg:text-4xl text-rocket-connect-lightgrey">
              Services
            </h2>
            <div className="flex flex-col w-full xl:w-5/6 xl:mx-auto py-10 gap-10 lg:px-10">
              {services.map((item, index) => (
                <section
                  key={item.title}
                  id={item.link}
                  className="pt-10 lg:pt-20"
                >
                  <div
                    className={`flex flex-col lg:flex-row gap-10 ${
                      index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    }`}
                    key={item.title}
                  >
                    <div className="flex flex-col gap-10">
                      <h3 className="font-semibold text-3xl text-center text-rocket-connect-lightgrey">
                        {item.title}
                      </h3>
                      <img
                        className="w-3/5 sm:w-2/5 xl:w-64 mx-auto mt-none s:mt-auto"
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <div className="lg:ml-auto lg:mt-20 flex-1 w-4/5  mx-auto lg:w-full lg:text-left text-rocket-connect-lightgrey">
                      <ul className="flex flex-col list-disc gap-10">
                        {item.points.map((point, index) => (
                          <li key={index}>
                            <p className="lg:text-xl tracking-wider font-light spacing-largest">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
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
