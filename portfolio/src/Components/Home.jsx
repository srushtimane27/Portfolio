import React from "react";
import "./../Css/home.css";
import Typed from "typed.js";

const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Frontend</i>.", "&amp; Backend."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div id="screen">
      <div id="box">
        <div id="right">
          <div>
            Hi, My name is <span className="purple">Srushti</span>{" "}
          </div>
          <div>and I am a </div>
          <div>Full Stack Developer</div>
          <div id="element">
            {" "}
            <span ref={el} />
          </div>
          <a href="/Srushti_CV.pdf" download="Srushti_CV.pdf">
            <button className="resume">RESUME</button>
          </a>
        </div>
        <div id="left">
          <div>
            <img
              className="w-h-100"
              src="https://cdni.iconscout.com/illustration/premium/thumb/female-developer-working-on-project-3839575-3202877.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
