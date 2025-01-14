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
            <h3>
              Software development has been my primary focus up to this point.
            </h3>
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
            <h1 style={{ textAlign: "center" }}>Where I'm Going</h1>
            <h3 style={{ textAlign: "center" }}>
              All future creations will be hosted at{" "}
              <a href="https://www.bluerose-studios.com">
                bluerose-studios.com
              </a>
            </h3>
            <h3 style={{ textAlign: "center" }}>Stay tuned!</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
