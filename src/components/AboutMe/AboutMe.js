import React from 'react';
import './styles.css';
import '../../common.css';

const AboutMe = () => {
    return <div className="caliFont codeBlock aboutMeSection">
        <div className="codeLine">
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
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariable">age</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliInt">28</span>
            <span className="caliWhite">;</span>
        </div> 
        <div className="codeLine">
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
        <div className="codeLineEmpty"></div>
        <div className="codeLine">
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
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliKeyBlue">static</span>
            &nbsp;
            <span className="caliVariable">hobbies</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliSymbolInner">{`[`}</span>
        </div>
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliString">"Game development"</span>
            <span className="caliWhite">,</span>
        </div>
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliString">"Web development"</span>
            <span className="caliWhite">,</span>
        </div>
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliString">"Bass guitar"</span>
            <span className="caliWhite">,</span>
        </div>
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliString">"Digital art"</span>
            <span className="caliWhite">,</span>
        </div>
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliString">"Cycling"</span>
        </div>
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliSymbolInner">{`]`}</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLineEmpty"></div>
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariablePrivate">#hoursSlept</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliInt">4</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLineEmpty"></div>
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliMethod">speak</span>
            <span className="caliSymbolInner">{`(`}</span>
            <span className="caliSymbolInner">{`)`}</span>
            &nbsp;
            <span className="caliSymbolInner">{`{`}</span>
        </div>
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariable">console</span>
            <span className="caliWhite">.</span>
            <span className="caliMethod">log</span>
            <span className="caliSymbolBlue">{`(`}</span>
            <span className="caliString">"I'm hungry..."</span>
            <span className="caliSymbolBlue">{`)`}</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLine">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliSymbolInner">{`}`}</span>
        </div>
        <div className="codeLine">            
            <span className="caliSymbol">{`}`}</span>
        </div>
    </div>
}

export default AboutMe;