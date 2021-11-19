import React from 'react';
import './expertise.scss';

const Expertise = () => {
    return (
        <div className='expertise' id='expertise'>
        <section class="skills section" id="skills">
            <span class="section-subtitle">Why Choose Me</span>
            <h1 class="section-title">My expertise Area</h1>

            <div class="skills_container bd-grid">
                <div class="skills-content front">
                    <h3 class="skills_subtitle">Frontend</h3>

                    <div class="skills_data">
                        <span class="skills_name">HTML/CSS</span>
                        <span class="skills_number">80%</span>
                        <span class="skills_bar skills_html"></span>
                    </div>

                    <div class="skills_data">
                        <span class="skills_name">Javascript</span>
                        <span class="skills_number">70%</span>
                        <span class="skills_bar skills_js"></span>
                    </div>

                    <div class="skills_data">
                        <span class="skills_name">React</span>
                        <span class="skills_number">75%</span>
                        <span class="skills_bar skills_react"></span>
                    </div>

                    <div class="skills_data">
                        <span class="skills_name">Bootstrap</span>
                        <span class="skills_number">85%</span>
                        <span class="skills_bar skills_bootstrap"></span>
                    </div>

                    <div class="skills_data">
                        <span class="skills_name">Material UI</span>
                        <span class="skills_number">85%</span>
                        <span class="skills_bar skills_material"></span>
                    </div>

                    <div class="skills_data">
                        <span class="skills_name">Redux</span>
                        <span class="skills_number">80%</span>
                        <span class="skills_bar skills_redux"></span>
                    </div>

                    <div class="skills_data">
                        <span class="skills_name">TypeScript</span>
                        <span class="skills_number">60%</span>
                        <span class="skills_bar skills_ts"></span>
                    </div>
                </div>
                <div class="skills-content back">
                    <h3 class="skills_subtitle">Backend</h3>

                    <div class="skills_data">
                        <span class="skills_name">Node.js</span>
                        <span class="skills_number">70%</span>
                        <span class="skills_bar skills_node"></span>
                    </div>

                    <div class="skills_data">
                        <span class="skills_name">MongoDB</span>
                        <span class="skills_number">80%</span>
                        <span class="skills_bar skills_mongodb"></span>
                    </div>

                    <div class="skills_data">
                        <span class="skills_name">Firebase</span>
                        <span class="skills_number">75%</span>
                        <span class="skills_bar skills_firebase"></span>
                    </div>

                </div>        
            </div>
        </section>
            
        </div>
    );
};

export default Expertise;