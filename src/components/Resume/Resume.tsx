import ResumeSection from "./ResumeSection";
import "./Resume.scss";

const Resume = () => {
  return (
    <div>
      <div id="software-development" className="resume-parent-container">
        <div className="resume-container">
          <h1 className="resume-section__title">Web Development</h1>

          <ResumeSection
            title="Software Engineer II &rarr; Senior Software Engineer"
            company="Percipio Health"
            introSnippets={[
              "At Percipio, I worked with an amazing team of familiar faces from my time at Olive, as well as new ones (some which I helped hire),",
              "to develop the front end for Percipio's patient mobile app, clinician-facing portal, as well as the content portal that manages content shown in the patient app.",
            ]}
            greatestPhrase="My proudest moments / the hardest things I worked on:"
            greatestLines={[
              'Created the content team\'s "pathway" builder in content portal without design input.',
              "In the very early days, I dipped into AI, helping our senior ML engineer get our first MRCNN pill detection model working via TensorFlow.",
            ]}
          />

          <ResumeSection
            title="Front End Software Engineer &rarr; Software Engineer II"
            company="Olive AI"
            introSnippets={[
              "Surrounded by an incredible team, I was proud to be promoted after 6 months at Olive. I had such fun on the Apertures team working on fun, detailed animation work.",
            ]}
            greatestPhrase="Coolest thing I made:"
            greatestLines={[
              'An aperture we ended up calling the "Batman radar" - complete with crazy rotating and zoom animations!',
            ]}
          />

          <div className="resume-section">
            <div className="resume-section__header">
              <h1>
                <span>Application Developer</span> <span>@ Zayo Group</span>
              </h1>
            </div>

            <div className="resume-section__description">
              <div className="resume-section__description__greatest-moment">
                Greatest Contribution:
              </div>
              <div className="resume-section__description__paragraph">
                <p>
                  Worked closely with senior designer to develop strategies
                  around delivering designs using best UI/UX practices for web
                  development.
                </p>
                <p>
                  Helped onboard junior hire. I truly enjoyed acting as a
                  teacher/mentor!
                </p>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-section__header">
              <h1>
                <span>Front End Developer</span>{" "}
                <span>@ The Green Solution</span>
              </h1>
            </div>

            <div className="resume-section__description">
              <div className="resume-section__description__greatest-moment">
                Proudest Moment:
              </div>
              <div className="resume-section__description__paragraph">
                <p>
                  Led 10+ cross-departmental project scoping meetings after
                  introducing an agile, user-centric approach.
                </p>
                <p>Received positive feedback through to executive level.</p>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-section__header">
              <h1>
                <span>Jr. Software Developer</span> <span>@ EVS</span>
              </h1>
            </div>
            <div className="resume-section__description">
              <div className="resume-section__description__greatest-moment">
                Greatest Accomplishment:
              </div>
              <div className="resume-section__description__paragraph">
                <p>
                  The Pack Station - A key feature of the web app. UI designed
                  by me!
                </p>
                <p>
                  Executives loved it so much, they made sure it was shown in
                  all major sales demos. It was even planned to be used in an
                  advertising campaign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mathematics" className="resume-parent-container">
        <div className="resume-container">
          <h1 className="resume-section__title" style={{ marginBottom: 24 }}>
            Math
          </h1>
          <div className="resume-section">
            <div className="resume-section__header">
              <h1 id="uic">University of Illinois at Chicago</h1>
            </div>
            <div className="resume-section__description">
              <div className="resume-section__sub-title">
                <h3 className="resume-section__education-title">
                  Bachelor of Science in Mathematics
                </h3>
              </div>
              <p>GPA: 3.8 | Minor in Spanish</p>
            </div>
            <div className="resume-section__description">
              <div className="resume-section__sub-title">
                <h3 className="resume-section__education-title">
                  Graduate Coursework
                </h3>
              </div>
              <p>MS Student in Pure Mathematics</p>
            </div>
            <div className="resume-section__description">
              <div className="resume-section__sub-title">
                <h3 className="resume-section__education-title">
                  Teaching Assistant
                </h3>
              </div>
              <p>Awarded Honorable Mention for Outstanding Teaching</p>
            </div>
            <div className="resume-section__description">
              <div className="resume-section__sub-title">
                <h3 className="resume-section__education-title">
                  Undergraduate Researcher
                </h3>
              </div>
              <p>
                Ask me about the behavior of a given quadratic irrational's
                simple continued fraction expansion when multiplied by two.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
