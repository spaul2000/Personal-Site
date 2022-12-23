import { red } from '@material-ui/core/colors';
import React from 'react';

const Skillbar = ({ data }) => {

    const titleStyle = {
        background: red,
    };

    const barStyle = {
        ...titleStyle,
        width: `${String(Math.min(100, Math.max((data.competency / 5.0) * 100.0, 0)))}%`,
    };

    return (
        <div className="skillbar clearfix">
            <div className="skillbar-title" style={titleStyle}><span>{data.skill}</span></div>
            <div className="skillbar-bar" style={barStyle} />
            <div className="skill-bar-percent">{data.competency} / 5</div>
        </div>
    );
};

export default Skillbar;