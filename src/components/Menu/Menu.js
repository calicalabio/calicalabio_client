import React from 'react';
import './styles.css';
import about_me_img from './img/about_me_white.png';
import skills_img from './img/skills_white.png';
import messages_img from './img/messages_white.png';


const Menu = (props) => {
    const getClasses = (viewName) => "menu_item" + (props.currentView == viewName ? " menu_item_selected" : "");
    

    const handleMenuClick = (viewName) => {

    } 

    return <div className="menu_container">
        <img 
            src={about_me_img} 
            title="About Me" 
            alt="icon for about me menu item" 
            className={getClasses("AboutMe")}
            onClick={() => props.onMenuClick("AboutMe")} />
        <img 
            src={skills_img} 
            title="Skills" 
            alt="icon for skills menu item" 
            className={getClasses("Skills")} 
            onClick={() => props.onMenuClick("Skills")} />
        <img 
            src={messages_img} 
            title="Messages" 
            alt="icon for messages menu item" 
            className={getClasses("Messages")} 
            onClick={() => props.onMenuClick("Messages")} />
    </div>
}

export default Menu;