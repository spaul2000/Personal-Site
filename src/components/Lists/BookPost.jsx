import React from 'react';

const BookPost = ({ cover, title, author, description }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} className='bookpost-container'>
            <div style={{ width: '33.33%', textAlign: 'center' }} clasName='cover-container'>
                <img src={cover} alt="" style={{ verticalAlign: 'middle' }} />
            </div>
            <div style={{ width: '66.66%', marginBottom: '2em' }}>
                <h3>{title}</h3>
                <h4>{author}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BookPost;