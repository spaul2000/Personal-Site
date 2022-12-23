import React from 'react';

const Education = () => {
    return (
        <div className="Education">
            <div className="link-to" id="education" ></div>
            <div className="title">
                <h3>Education</h3>
            </div>
            <article class='degree'>
                <header>
                    <h4 className="degree-title">M.S. & B.S. Computer Science</h4>
                    <p className="specialization">Artifical Intelligence</p>
                    <p className="school">
                        <a href='#' className="university">Stanford University</a>, 2024
                        </p>
                </header>
            </article>
            <article class='degree'>
                <header>
                    <h4 className="degree-title">Harvard-Westlake High School</h4>
                    <p>2019</p>
                </header>
            </article>

        </div>
    );
};

export default Education;