import React from 'react';

const Job = ({ job }) => {
    return (
        <article className='job-container'>
            <header>
                <h4>{job.company} - {job.role}</h4>
                <p className="dates">{job.start} - {job.end}</p>
            </header>
            <ul className='descript'>
                {job.description.map(p => (
                    <li key={p}>{p}</li>
                ))}
            </ul>
        </article>
    );
};

export default Job;