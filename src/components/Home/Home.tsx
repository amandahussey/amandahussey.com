import { useEffect, useState } from "react";
import "./Home.scss";

import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import About from "../About/About";
import Resume from "../Resume/Resume";

const Home = () => {
  const [navIsFixed, setNavIsFixed] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // on scroll, capture scrollY (and any resizing of window)
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setScrollY(window.scrollY);
        setWindowHeight(window.innerHeight);
      },
      false
    );
  }, []);

  // then handle name animation based on captured scrollY
  useEffect(() => {
    // set --scroll property to be percentage scrolled down
    const percentage = scrollY / windowHeight;
    if (percentage < 1)
      document.body.style.setProperty("--scroll", percentage.toString()); // setting to document.body.style to be accessible in css animation
    if (percentage >= 1) document.body.style.setProperty("--scroll", "0.99"); // ensure doesn't pop to 100%

    // navIsFixed once animation has reached 100%
    if (percentage >= 1) {
      setNavIsFixed(true);
    } else {
      setNavIsFixed(false);
    }
  }, [scrollY, windowHeight]);

  return (
    <div>
      <Landing navIsFixed={navIsFixed} />
      <Nav />
      <Resume />
      <About type={"future"} />
      <About type={"contact"} />
    </div>
  );
};

export default Home;
