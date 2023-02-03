import React from 'react';
import '../../common.css';

const AboutMeContentCollapsed = (props) => {
    return <div className="caliFont codeBlock">
        <div className="codeLine caliHighlighted caliHover" onClick={() => props.onCodeClick()}>
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
            &nbsp;&nbsp;&nbsp;
            <span className="caliGrey">...</span>
        </div>
        <div className="codeLine">            
            <span className="caliSymbol">{`}`}</span>
            <span className="caliWhite">;</span>
        </div>
        <div className="codeLineEmpty"></div>
    </div>
}

export default AboutMeContentCollapsed;