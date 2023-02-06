import React from 'react';
import '../../common.css';

const SkillsContent = (props) => {
    return <div className="caliFont codeBlock">
        <div className="codeLine caliHover" onClick={() => props.onCodeClick()}>
            <span className="caliKeyBlue">let</span>
            &nbsp;
            <span className="caliVariable">skills</span>
            &nbsp;
            <span className="caliKeyBlue">=</span>
            &nbsp;
            <span className="caliSymbol">{`{`}</span>
        </div>
        <div className="codeLine caliGuide">
        &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliKeyBlue">var</span>
            &nbsp;
            <span className="caliVariable">yearsOfExperience</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliInt">5.5</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLineEmpty caliGuide"></div>
        <div className="codeLine caliGuide">
        &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliKeyBlue">var</span>
            &nbsp;
            <span className="caliVariable">programmingSkillsAndExperience</span>
            &nbsp;
            <span className="caliWhite">=</span>
            &nbsp;
            <span className="caliSymbolInner">{`{`}</span>
        </div>
        <div className="codeLineIndent caliGuide">
            <div className="codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="caliGuide codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliVariable">languages:</span>
                &nbsp;
                <span className="caliSymbolBlue">{`[`}</span>
                <span className="caliString">"C#, VB.net, TypeScript, GDScript, Java"</span>
                <span className="caliSymbolInner">{`]`}</span>
                <span className="caliWhite">,</span>
            </div>
        </div>
        <div className="codeLineIndent caliGuide">
            <div className="codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="caliGuide codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliVariable">frameworks:</span>
                &nbsp;
                <span className="caliSymbolBlue">{`[`}</span>
                <span className="caliString">"ASP.NET, Vue.js"</span>
                <span className="caliSymbolBlue">{`]`}</span>
                <span className="caliWhite">,</span>
            </div>
        </div>
        <div className="codeLineIndent caliGuide">
            <div className="codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="caliGuide codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliVariable">libraries:</span>
                &nbsp;
                <span className="caliSymbolBlue">{`[`}</span>
                <span className="caliString">"React.js, Knockout.js"</span>
                <span className="caliSymbolBlue">{`]`}</span>
                <span className="caliWhite">,</span>
            </div>
        </div>
        <div className="codeLineIndent caliGuide">
            <div className="codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="caliGuide codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliVariable">databases:</span>
                &nbsp;
                <span className="caliSymbolBlue">{`[`}</span>
                <span className="caliString">"SQL Server, MongoDB"</span>
                <span className="caliSymbolBlue">{`]`}</span>
                <span className="caliWhite">,</span>
            </div>
        </div>
        <div className="codeLineIndent caliGuide">
            <div className="codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="caliGuide codeIndent">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="caliVariable">other:</span>
                &nbsp;
                <span className="caliSymbolBlue">{`[`}</span>
                <span className="caliString">"Node.js, Docker, AWS, Agile Development"</span>
                <span className="caliSymbolBlue">{`]`}</span>  
            </div>          
        </div>
        <div className="codeLine caliGuide">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="caliSymbolInner">{`}`}</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLine">
            <span className="caliSymbol">{`}`}</span>
            <span className="caliWhite">;</span>
        </div>
    </div>
}

export default SkillsContent;