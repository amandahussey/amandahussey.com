import "./Resume.scss";

const ResumeSection = ({
  title,
  company,
  technologies,
  introSnippets,
  greatestPhrase,
  greatestLines,
}: {
  title: string;
  company: string;
  technologies?: string[];
  introSnippets?: string[];
  greatestPhrase?: string;
  greatestLines: string[];
}) => {
  return (
    <div className="resume-section">
      <div className="resume-section__header">
        <h1>
          <span>{title}</span> <span>@ {company}</span>
        </h1>
      </div>
      {technologies && (
        <p className="resume-section__technologies-used">
          {technologies.map((tech) => (
            <span>[ {tech} ]</span>
          ))}
        </p>
      )}

      <div className="resume-section__description" style={{ marginLeft: 24 }}>
        {introSnippets && introSnippets.map((text, i) => <p key={i}>{text}</p>)}
      </div>

      <div className="resume-section__description">
        <div className="resume-section__description__greatest-moment">
          {greatestPhrase}
        </div>
        {greatestLines && (
          <div className="resume-section__description__paragraph">
            {greatestLines.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeSection;
