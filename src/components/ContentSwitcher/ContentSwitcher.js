import React from 'react';
import './styles.css';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Messages from '../Messages/Messages';


const Menu = (props) => {
    return <div className="contentContainer">
        { props.currentView == "AboutMe" && <AboutMe /> }
        { props.currentView == "Skills" && <Skills /> }
        { props.currentView == "Messages" && <Messages /> }
    </div>
}

export default Menu;