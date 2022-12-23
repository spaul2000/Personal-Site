import React from 'react';
import courses from '../../data/courses';

const Courses = () => {
    return (
        <div className='Courses'>
            <div className="link-to" id="Courses" ></div>
            <div className="title">
                <h3>Selected Courses</h3>
                <ul className="courses-container">
                    {courses.map(course => (
                        <li className="course">
                            <a href={course.link}>
                                <h4 className="couse-number">{course.number}:</h4>
                                <p className="course-name">{course.title}</p>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
};

export default Courses;