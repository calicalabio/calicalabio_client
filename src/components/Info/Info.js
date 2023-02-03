import React, { useState } from "react";
import AboutMeContent from '../AboutMeContent/AboutMeContent';
import AboutMeContentCollapsed from "../AboutMeContentCollapsed/AboutMeContentCollapsed";
import SkillsContent from '../SkillsContent/SkillsContent';
import SkillsContentCollapsed from "../SkillsContentCollapsed/SkillsContentCollapsed";
import './styles.css';
import '../../common.css';

const Info = () => {
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showSkills, setShowSkills] = useState(true);

    const toggleAboutMeCollapse = () => {
        console.log('toggle about me');
        setShowAboutMe(!showAboutMe);
    };

    const toggleSkillsCollapse = () => {
        console.log('toggle skills');
        setShowSkills(!showSkills);
    };
    
    return <div className="infoContainer">
    <div className="caliCodeCollapse">
        <div>
            <i className={"icon " + (showAboutMe ? "icon-chevron-open" : "icon-chevron-closed")} onClick={toggleAboutMeCollapse}></i>
        </div>
        { 
        showAboutMe ? 
        <AboutMeContent onCodeClick={toggleAboutMeCollapse} /> : 
        <AboutMeContentCollapsed onCodeClick={toggleAboutMeCollapse} /> 
        }
    </div>

    <div className="caliCodeCollapse">
        <div>
            <i className={"icon " + (showSkills ? "icon-chevron-open" : "icon-chevron-closed")} onClick={toggleSkillsCollapse}></i>
        </div>
        { 
        showSkills ? 
        <SkillsContent onCodeClick={toggleSkillsCollapse} /> : 
        <SkillsContentCollapsed onCodeClick={toggleSkillsCollapse} /> 
        }
    </div>
</div>
}

export default Info;