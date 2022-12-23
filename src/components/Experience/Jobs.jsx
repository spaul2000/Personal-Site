import React from 'react';
import jobs from '../../data/jobs';
import Job from './Job';

const Jobs = () => {
    return (
        <div className='Work'>
            <div className="link-to" id="Jobs" ></div>
            <div className="title2">
                <h3>Work Experience</h3>
                <div className="job-container">
                    <div>
                        {jobs.map(job => (
                            <Job key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Jobs;