import "./About.scss";

const About = ({
  mini,
  type,
}: {
  mini?: boolean;
  type: "past" | "future" | "contact";
}) => {
  return (
    <div>
      {type === "past" && (
        <div
          className={`about-container about--left-aligned ${
            mini ? "mini" : ""
          }`}
        >
          <div className={"about-section about-section--left-aligned"}>
            <h1>Where I've Been</h1>
            <h3>Web development has been my focus up to this point.</h3>
            <h3>Before software, there was math.</h3>
          </div>
        </div>
      )}

      {type === "future" && (
        <div
          className={`about-container about--right-aligned ${
            mini ? "mini" : ""
          }`}
        >
          <div className={"about-section about-section--right-aligned"}>
            <h1>Where I'm Going</h1>
            <h3>
              I'm taking a leap of faith to start some creative endeavors of my
              own, starting with a children's book!
            </h3>
            <h3>
              All future creations will be hosted at{" "}
              <a href="https://www.bluerose-studios.com">
                bluerose-studios.com
              </a>
            </h3>
            {!mini && (
              <>
                <h3 style={{ marginTop: 48 }}>
                  For fun, I created a{" "}
                  <a href="/home-desk">mini version of amandahussey.com</a>.
                </h3>
                <h3>
                  Curious? Feel free to{" "}
                  <a href="mailto: amanda.k.hussey@gmail.com">get in touch!</a>
                </h3>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
