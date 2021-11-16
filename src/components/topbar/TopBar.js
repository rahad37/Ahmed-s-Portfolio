import { Mail, Person } from '@material-ui/icons';
import React from 'react';
import './TopBar.scss';

const TopBar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={'topbar ' + (menuOpen && 'active') }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>ahmed.</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+8801789914078</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>rrahad7867@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                      <span className="line1"></span>
                      <span className="line2"></span>
                      <span className="line3"></span>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;