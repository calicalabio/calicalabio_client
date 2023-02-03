import React from 'react';
import '../../common.css';

const AboutMeContent = (props) => {
    return <div className="caliFont codeBlock">
        <div className="codeLine caliHover" onClick={() => props.onCodeClick()}>
            <span className="caliKeyPurple">export</span>
            &nbsp;
            <span className="caliKeyBlue">class</span>
            &nbsp;
            <span className="caliClass">CaliCalabio</span>
            &nbsp;
            <span className="caliKeyBlue">extends</span>
            &nbsp;
            <span className="caliClass">Developer</span>
            &nbsp;
            <span className="caliSymbol">{`{`}</span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariable">age</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliInt">28</span>
            <span className="caliWhite">;</span>
        </div> 
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariable">tasks</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliSymbolInner">{`[`}</span>
            <span className="caliString">"Find a job"</span>
            <span className="caliWhite">,</span>
            &nbsp;
            <span className="caliString">"Activate Windows"</span>
            <span className="caliWhite">,</span>
            &nbsp;
            <span className="caliString">"Look for food"</span>
            <span className="caliWhite"></span>            
            <span className="caliSymbolInner">{`]`}</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLineEmpty caliGuide"></div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliKeyBlue">static</span>
            &nbsp;
            <span className="caliVariable">role</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliString">"Full-stack web-developer"</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliKeyBlue">static</span>
            &nbsp;
            <span className="caliVariable">hobbies</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliSymbolInner">{`[`}</span>
        </div>
        <div className="codeLineIndent caliGuide">
            <div className="codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="caliGuide codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliString">"Game development"</span>
                <span className="caliWhite">,</span>
            </div>
        </div>
        <div className="codeLineIndent caliGuide">
            <div className="codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="caliGuide codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliString">"Web development"</span>
                <span className="caliWhite">,</span>
            </div>
        </div>
        <div className="codeLineIndent caliGuide">
            <div className="codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="caliGuide codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliString">"Bass guitar"</span>
                <span className="caliWhite">,</span>
            </div>
        </div>
        <div className="codeLineIndent caliGuide">
            <div className="codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="caliGuide codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliString">"Digital art"</span>
                <span className="caliWhite">,</span>
            </div>
        </div>
        <div className="codeLineIndent caliGuide">
            <div className="codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="caliGuide codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliString">"Cycling"</span>
            </div>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliSymbolInner">{`]`}</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLineEmpty caliGuide"></div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariablePrivate">#hoursSlept</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliInt">4</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLineEmpty caliGuide"></div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliMethod">speak</span>
            <span className="caliSymbolInner">{`(`}</span>
            <span className="caliSymbolInner">{`)`}</span>
            &nbsp;
            <span className="caliSymbolInner">{`{`}</span>
        </div>
        <div className="codeLine caliGuide">
            <span>
                &nbsp;&nbsp;&nbsp;&nbsp;                
            </span>
            <span className="caliGuide">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliVariable">console</span>
                <span className="caliWhite">.</span>
                <span className="caliMethod">log</span>
                <span className="caliSymbolBlue">{`(`}</span>
                <span className="caliString">"I'm hungry..."</span>
                <span className="caliSymbolBlue">{`)`}</span>
                <span className="caliWhite">;</span>
            </span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliSymbolInner">{`}`}</span>
        </div>
        <div className="codeLine">            
            <span className="caliSymbol">{`}`}</span>
        </div>
        <div className="codeLineEmpty"></div>
    </div>
}

export default AboutMeContent;