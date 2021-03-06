import React from 'react';
import './Menu.scss';

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(false)}><a href="#intro">Home</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#about">About</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#expertise">Skills</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#portfolio">Project</a></li>
                <li onClick={() => setMenuOpen(false)}><a href="#works">Works</a></li>
                {/* <li onClick={() => setMenuOpen(false)}><a href="#testimonials">Testimonials</a></li> */}
                <li onClick={() => setMenuOpen(false)}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Menu;