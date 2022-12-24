import React from 'react';
import Music from '../components/Lists/Music';
import Books from '../components/Lists/Books';

function Lists(props) {
    const sections = ['Music', 'Books', 'Movies'];
    return (
        <div id="main" className='lists'>
            <article className='post' id="resume">
                <header>
                    <div className="title" >
                        <h2>Lists</h2>
                        <p>The purpose of this page is to give you insight into what media I consume. It's also for me to have an aggregation of my thoughts on music, movies, and books. </p>
                    </div>
                </header>
                <Music />
                <Books />
            </article>
        </div>
    );
}

export default Lists;