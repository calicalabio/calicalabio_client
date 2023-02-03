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
        setShowAboutMe(!showAboutMe);
    };

    const toggleSkillsCollapse = () => {
        setShowSkills(!showSkills);
    };
    
    return <div className="infoContainer">
        <div className="caliCodeCollapse">
            <div><i className="icon-container"></i></div>
            <div className="caliFont codeBlock">
                <div className="codeLine">                
                    <span className="caliKeyBlue">console</span>                    
                    <span className="caliWhite">.</span>                    
                    <span className="caliMethod">log</span>                    
                    <span className="caliSymbol">{`(`}</span>
                    <span className="caliString">"Hello world!"</span>
                    <span className="caliSymbol">{`)`}</span>
                    <span className="caliWhite">;</span>
                </div>
                <div className="codeLineEmpty"></div>
            </div>
        </div>

        <div className="caliCodeCollapse">
            <div>
                <i className={"icon-container " + (showAboutMe ? "icon-chevron-open" : "icon-chevron-closed")} onClick={toggleAboutMeCollapse}></i>
            </div>
            { 
            showAboutMe ? 
            <AboutMeContent onCodeClick={toggleAboutMeCollapse} /> : 
            <AboutMeContentCollapsed onCodeClick={toggleAboutMeCollapse} /> 
            }
        </div>

        <div className="caliCodeCollapse">
            <div>
                <i className={"icon-container " + (showSkills ? "icon-chevron-open" : "icon-chevron-closed")} onClick={toggleSkillsCollapse}></i>
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