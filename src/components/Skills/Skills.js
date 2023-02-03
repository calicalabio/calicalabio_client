import React from 'react';
import './styles.css';
import '../../common.css';

const Skills = () => {
    return <div className="caliFont codeBlock skillsSection">
        <div className="codeLine">
            <span className="caliKeyBlue">var</span>
            &nbsp;
            <span className="caliVariable">yearsOfExperience</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliInt">5.5</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLineEmpty"></div>
        <div className="codeLine">
            <span className="caliKeyBlue">var</span>
            &nbsp;
            <span className="caliVariable">programmingSkillsAndExperience</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliSymbol">{`{`}</span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariable">languages:</span>
            &nbsp;
            <span className="caliSymbolInner">{`[`}</span>
            <span className="caliString">"C#, VB.net, TypeScript, GDScript, Java"</span>
            <span className="caliSymbolInner">{`]`}</span>
            <span className="caliWhite">,</span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariable">frameworks:</span>
            &nbsp;
            <span className="caliSymbolInner">{`[`}</span>
            <span className="caliString">"ASP.NET, Vue.js"</span>
            <span className="caliSymbolInner">{`]`}</span>
            <span className="caliWhite">,</span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariable">libraries:</span>
            &nbsp;
            <span className="caliSymbolInner">{`[`}</span>
            <span className="caliString">"React.js, Knockout.js"</span>
            <span className="caliSymbolInner">{`]`}</span>
            <span className="caliWhite">,</span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariable">databases:</span>
            &nbsp;
            <span className="caliSymbolInner">{`[`}</span>
            <span className="caliString">"SQL Server, MongoDB"</span>
            <span className="caliSymbolInner">{`]`}</span>
            <span className="caliWhite">,</span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliVariable">other:</span>
            &nbsp;
            <span className="caliSymbolInner">{`[`}</span>
            <span className="caliString">"Node.js, Docker, AWS, Agile Development"</span>
            <span className="caliSymbolInner">{`]`}</span>            
        </div>
        <div className="codeLine">
            <span className="caliSymbol">{`}`}</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLineEmpty"></div>
        <div className="codeLine">
            <span className="caliKeyBlue">var</span>
            &nbsp;
            <span className="caliVariable">nonProgrammingSkillsAndExperience</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliSymbol">{`[`}</span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliString">"Playing live music at functions and clubs"</span>
            <span className="caliWhite">,</span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliString">"Freelance digital art"</span>
            <span className="caliWhite">,</span>
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliString">"Making and selling art at conventions"</span>
        </div>
        <div className="codeLine">
            <span className="caliSymbol">{`]`}</span>
            <span className="caliWhite">;</span>
        </div>
    </div>
}

export default Skills;