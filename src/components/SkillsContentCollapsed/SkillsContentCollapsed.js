import React from 'react';
import '../../common.css';

const SkillsContentCollapsed = (props) => {
    return <div className="caliFont codeBlock">
        <div className="codeLine caliHighlighted caliHover" onClick={() => props.onCodeClick()}>
            <span className="caliKeyBlue">let</span>
            &nbsp;
            <span className="caliKeyBlue">skills</span>
            &nbsp;
            <span className="caliKeyBlue">=</span>
            &nbsp;
            <span className="caliSymbol">{`{`}</span>
            &nbsp;&nbsp;
            <span className="caliGrey">...</span>
        </div>
        <div className="codeLine">            
            <span className="caliSymbol">{`}`}</span>
        </div>
    </div>
}

export default SkillsContentCollapsed;