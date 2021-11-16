import React from 'react';
import './about.scss';

const About = () => {
    return (
        <div>
            <section class="about section" id="about">
            <span class="section-subtitle">My Intro</span>
            <h2 class="section-title">About Me</h2>

            <div class="about_container bd-grid">
                <div class="about_data">
                    <p class="about_description text-justify">Hey, This is me, Rahad Ahmed from Comilla, Bangladesh. I am a professional web developer. I am expert in HTML5, CSS, Javascript and React. I also have good knowledge in Node.js, Firebase, mongoDB and so on. My passion is to learn quickly
                        and adjust to new environments and technologies.</p>
                    <img src="./image/about.jpg" alt="" class="about_img" style='background: #ffbe76;'/>                 
                </div>
                
                <div>
                    <div class="about_information">
                        <h3 class="about-information-title">Information</h3>

                        <div class="about_information-data">
                            <i class="bx bx-user about_information-icon"></i>
                            <span>Rahad Ahmed</span>
                        </div>
                        <div class="about_information-data">
                            <i class="bx bx-phone about_information-icon"></i>
                            <span>+8801789914078</span>
                        </div>
                        <div class="about_information-data">
                            <i class="bx bx-envelope about_information-icon"></i>
                            <span>rrahad7867@gmail.com</span>
                        </div>

                    </div>

                <div class="about_information">
                    <h3 class="about-information-title">support</h3>
        </div>
                <div class="about_information-data">
                        <i class="bx bx-briefcase about_information-icon"></i>
                        <div>
                            <span class="about_information-subtitle">10+ Projects</span>
                            <span class="about_information-subtitle-small">Completed</span>
                        </div>
                    </div>

                    <div class="about_information-data">
                        <i class="bx bx-support about_information-icon"></i>
                        <div>
                            <span class="about_information-subtitle">Support</span>
                            <span class="about_information-subtitle-small">Online 24/7</span>
                        </div>
                    </div>
                </div>
                </div>           
        </section>
        </div>
    );
};

export default About;