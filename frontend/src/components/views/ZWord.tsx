import { Container } from "../utils/Container";
import { Link } from "../utils/Link";
import { zDark, zWordDark } from "../utils/images";

export function ZWord() {
  return (
    <section id="zword">
      <div className="bg-white w-full">
        <div className="py-10">
          <Container>
            <div className="flex justify-center gap-40">
              <div className={`text-z-word-dark`}>
                <h3 className={`break-word text-2xl xl:text-3xl`}>
                  Connecting people through topics that truly matter.
                </h3>

                <p className="mt-5">
                  <Link
                    color="z-word-dark"
                    content="spreadzword.com"
                    href="https://spreadzword.com"
                  ></Link>
                </p>
              </div>

              <div className="w-16">
                <img src={zDark} alt="logo" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
