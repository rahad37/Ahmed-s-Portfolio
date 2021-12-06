import React from "react";
import "./about.scss";
import { Person, Phone, Mail, HeadsetMic } from "@material-ui/icons";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-information">
        <div className="my-photo">
          <p className="about_description">
            Hey, This is me, Rahad Ahmed from Comilla, Bangladesh. I am a
            professional web developer. I am expert in HTML5, CSS, Javascript
            and React. I also have good knowledge in Node.js, Firebase, mongoDB
            and so on. My passion is to learn quickly and adjust to new
            environments and technologies.
          </p>
          <img src="assets/man-3.png" alt="" className="about-img" />
        </div>
        <div className="about-data">
          <div className="first-part">
            <h2>Information</h2>
            <div className="info-item">
              <div className="info">
                <Person className="info-icon" />
                <h4>Rahad Ahmed</h4>
              </div>
              <div className="info">
                <Phone className="info-icon" />
                <h4>+8801789914078</h4>
              </div>
              <div className="info">
                <Mail className="info-icon" />
                <h4>rrahad7867@gmail.com</h4>
              </div>
            </div>

            <h2>Support</h2>
            <div>
              <div className="info">
                <HeadsetMic className="info-icon" />
                <div>
                  <h4>Support</h4>
                  <h4>Online 24/7</h4>              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
