import { ContactForm } from "../utils/ContactForm";
import { Container } from "../utils/Container";
import { githubWhite, linkedin, twitter } from "../utils/images";

const socials = [
  {
    url: "https://www.linkedin.com/company/rocket-connect/",
    logo: linkedin,
  },
  {
    url: "https://twitter.com/rocketconnect",
    logo: twitter,
  },
  {
    url: "https//github.com/rocket-connect",
    logo: githubWhite,
  },
];

export function Contact() {
  return (
    <div className="bg-rocket-connect-darkblue w-full">
      <div className="py-10">
        <Container>
          <h2 className="font-bold text-white text-5xl">Contact us</h2>
          <p className="mt-5">
            <a
              className="text-rocket-connect-lightblue text-2xl"
              href="mailto:launch@rocketconnect.co.uk"
            >
              launch@rocketconnect.co.uk
            </a>
          </p>
          <div className="flex justify-between align-center py-10">
            <div className="w-full">
              <ContactForm />
            </div>

            <div className="w-full mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1673987663695!5m2!1sen!2suk"
                width="100%"
                height="350"
                loading="lazy"
                className="mt-10 mx-auto"
              ></iframe>

              <p className="italic text-2xl text-rocket-connect-lightgrey mt-10 w-1/2 text-center mx-auto">
                We are a remote company with a base in London.
              </p>
              <div className="flex align-center justify-between py-10 mx-auto w-2/3">
                {socials.map((item) => (
                  <img className="h-12 my-5" src={item.logo} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
