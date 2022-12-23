import React from 'react';
import Skillbar from './Skillbar';
import skills from '../../data/skills';

function getRows() {

    return skills.sort((a, b) => {
        let ret = 0;
        if (a.competency > b.competency) ret = -1;
        else if (a.competency < b.competency) ret = 1;
        return ret;
    }).map((skill) => (
        <Skillbar
            data={skill}
            key={skill.skill}
        />
    ));
}

const Skills = () => {

    return (
        <div className="skills">
            <div className="link-to" id="Skills" />
            <div className="title">
                <h3>Skills</h3>
            </div>
            <div className="skill-row-container">
                {getRows()}
            </div>
        </div>
    );
};

export default Skills;