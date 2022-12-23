import React from 'react';
import projects from '../data/projects';
import ProjectPost from '../components/Projects/ProjectPost';


function Projects(props) {

    return (

        <article className='post' id='projects'>
            <header>
                <div className='title'>
                    <h2>Projects</h2>
                    <p>Some things I've built. Click on a project to get more detail if you're interested.</p>
                </div>
            </header>
            {projects.map(project => (
                <ProjectPost key={project.title} data={project} />
            ))}
        </article>

    )
}

export default Projects;