import React from 'react';
import { Link } from 'react-router-dom';
import Education from '../components/Experience/Education';
import Courses from '../components/Experience/Courses';
import Jobs from '../components/Experience/Jobs';
import Skills from '../components/Experience/Skills';

function Experience(props) {
    const sections = ['education', 'Courses', 'Jobs', 'Skills'];
    return (
        <div id="main">
            <article className="post" id="resume">
                <header>
                    <div className="title">
                        <h2>Resume</h2>
                        <div className="link-container">
                            {sections.map(sec => (
                                <h4>
                                    <a href={`#${sec}`}>{sec}</a>
                                </h4>
                            ))}
                        </div>
                    </div>

                </header>
                <Education />
                <Courses />
                <Jobs />
                <Skills />
            </article>


        </div>
    );
}

export default Experience;