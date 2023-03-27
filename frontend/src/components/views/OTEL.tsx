import { Container } from "../utils/Container";
import { Link } from "../utils/Link";
import { openSourceIcon } from "../utils/images";

export function OTEL() {
  return (
    <section id="zword">
      <div className="text-rocket-connect-lightgrey gradient-background bg-rocket-connect-darkblue w-full">
        <div className="py-20">
          <Container>
            <h2 className="font-bold text-3xl xl:text-4xl">
              Open source software
            </h2>
            <div className="flex py-20 justify-center">
              <div className="flex flex-col w-3/6">
                <h3 className="font-bold text-2xl xl:text-3xl">GraphQL OTEL</h3>
                <p className="my-5 text-sm">
                  <ul className="ml-5 list-disc">
                    <li>
                      <Link
                        color="lightgrey"
                        content="https://www.npmjs.com/package/graphql-otel"
                        href="https://www.npmjs.com/package/graphql-otel"
                      />
                    </li>
                  </ul>
                </p>

                <div className="ml-5">
                  <p className="mb-5">
                    Opentelemetry GraphQL schema directive.
                  </p>

                  <p className="font-bold">
                    Supports:
                    <ul className="ml-5 my-5 list-disc">
                      <li>NewRelic</li>
                      <li>Jaeger</li>
                      <li>Opentelemetry</li>
                      <li>Node.js</li>
                      <li>Typescript</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="w-1/5 mt-10">
                <img src={openSourceIcon} />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
