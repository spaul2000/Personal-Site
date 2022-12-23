import React from 'react';

const ProjectPost = ({ data }) => {
    console.log(data.link, data.imagePath)
    return (
        <div className='cell-container'>
            <article className='mini-post'>
                <header>
                    <h3><a href={`${process.env.PUBLIC_URL}${data.link}`}>{data.title}</a></h3>
                    <p className='published-date'>{data.date}</p>
                </header>
                <a href={`${process.env.PUBLIC_URL}${data.link}`} className="image">
                    <img src={`${process.env.PUBLIC_URL}${data.imagePath}`} alt={data.title} />
                </a>
                <div className='description'>
                    <p>{data.description}</p>
                </div>
            </article>
        </div>
    );
};

export default ProjectPost;