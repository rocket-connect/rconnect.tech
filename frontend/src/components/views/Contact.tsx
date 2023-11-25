import { ContactForm } from "../utils/ContactForm";
import { Container } from "../utils/Container";
import {
  githubWhite,
  githubDark,
  linkedinWhite,
  linkedinDark,
} from "../utils/images";

export const socials = [
  {
    url: "https://www.linkedin.com/company/rocketconnect/",
    logoWhite: linkedinWhite,
    logoDark: linkedinDark,
    text: "LinkedIn",
  },
  {
    url: "https://www.github.com/rocket-connect",
    logoWhite: githubWhite,
    logoDark: githubDark,
    text: "GitHub",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="gradient-background bg-rocket-connect-darkblue to-transparent py-20"
    >
      <Container>
        <div className="w-full xl:w-5/6 xl:mx-auto">
          <h2 className="font-bold text-white text-3xl xl:text-4xl mb-5">
            Contact
          </h2>
          <p className="text-rocket-connect-lightblue">
            <a href="mailto:launch@rocketconnect.co.uk">
              launch@rocketconnect.co.uk
            </a>
          </p>
          <div className="flex flex-col md:flex-row md:w-7/8 md:mx-auto mt-10">
            <div className="w-full md:w-1/2 md:mr-4 mb-6 md:mb-0">
              <ContactForm />
            </div>
            <div className="w-full md:w-1/2 md:ml-4 mt-12">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1673987663695!5m2!1sen!2suk"
                width="100%"
                height="250"
                loading="lazy"
                className="my-auto mx-auto"
              ></iframe>
              <p className="italic md:text-xl text-rocket-connect-lightgrey mt-6 w-5/6 text-center mx-auto">
                We are a remote company registered in London.
              </p>
              <div className="flex items-center justify-center gap-12 md:gap-20 mx-auto w-2/3 mt-10">
                {socials.map((item, index) => (
                  <a key={index} href={item.url} className="hover:opacity-75">
                    <img
                      className="h-8 lg:h-12 my-5"
                      src={item.logoWhite}
                      alt="Social Logo"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
