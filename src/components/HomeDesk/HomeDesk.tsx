import { useEffect, useRef, useState } from "react";
import About from "../About/About.js";
import "./HomeDesk.scss";

function HomeDesk() {
  const [scrollTop, setScrollTop] = useState(0);
  const [navIsFixed, setNavIsFixed] = useState(false);
  const windowHeight = 150;
  const siteContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (siteContainerRef.current)
      siteContainerRef.current.addEventListener(
        "scroll",
        (element) => {
          if (element.target) {
            setScrollTop((element.target as HTMLDivElement).scrollTop);
          }
        },
        false
      );
  }, []);

  useEffect(() => {
    // set --scroll property to be percentage scrolled down
    const percentage = scrollTop / windowHeight;
    if (percentage < 0) document.body.style.setProperty("--scroll-mini", "0");
    else if (percentage > 0 && percentage < 1)
      document.body.style.setProperty("--scroll-mini", percentage.toString());
    else if (percentage >= 1)
      document.body.style.setProperty("--scroll-mini", "0.99"); // ensure doesn't pop to 100%å

    // navIsFixed once animation has reached 100%
    if (percentage >= 1) {
      setNavIsFixed(true);
    } else {
      setNavIsFixed(false);
    }
  }, [scrollTop]);

  return (
    <div className="home-desk-background-container">
      <div className="home-desk-the-desk">
        <div className="home-desk-computer">
          <div className="home-desk-computer-perspective-container">
            <div className="home-desk-computer-stand-top"></div>
            <div className="home-desk-computer-stand-bottom"></div>
            <div className="home-desk-computer-screen-frame">
              <div className="home-desk-computer-screen">
                <div
                  className="home-desk-computer-screen-site-container"
                  ref={siteContainerRef}
                >
                  <div className="home-desk-computer-screen-site-content">
                    <div className="home-desk-computer-screen-site-landing"></div>
                    <About mini type={"past"} />
                    <About mini type={"future"} />
                  </div>

                  <p
                    className={`home-desk-computer-screen-site-name ${
                      navIsFixed ? "fixed-name" : ""
                    }`}
                  >
                    Amanda Hussey
                  </p>
                  <p className="home-desk-computer-screen-site-title">
                    Software Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDesk;
