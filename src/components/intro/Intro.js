import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Programmer",
        "Designer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/poster.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Rahad Ahmed</h1>
          <h3>
            React <span ref={textRef}></span>
          </h3>
          <form target='_blank'>
            <button className='resume' formaction="https://drive.google.com/file/d/11sjDU_TiOQjNV1YGNrvn34DkH7vHMuKm/view?usp=sharing">Resume</button>
          </form>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
