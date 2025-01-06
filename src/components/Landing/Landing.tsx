import "./Landing.scss";

const Landing = ({ navIsFixed }: { navIsFixed: boolean }) => {
  return (
    <div id="landing__container">
      <div id="landing__text-container">
        <h1
          id="landing__text-container__name"
          className={navIsFixed ? "fix-name" : ""}
        >
          Amanda Hussey
        </h1>
        <h2
          id="landing__text-container__software-dev"
          className={navIsFixed ? "hide-title" : ""}
        >
          Software Developer
        </h2>
      </div>
    </div>
  );
};

export default Landing;
