import React from 'react';

function Home(props) {
    return (
        <div id='main' className="home">
            <article className='post' id="about">
                <header>
                    <div className="title" id="title-about">
                        <h2>About Me</h2>
                        <img src={`${process.env.PUBLIC_URL}/Images/profile.jpeg`} alt />
                    </div>
                </header>

                <h1>Intro</h1>
                <p>
                    Hey, I'm Spencer Paul - currently a student at <span id="stanford">Stanford</span> studying Computer Science with a concentration
                    in Artifical Intelligence (B.S. 2023, M.S. 2024). I am interested in the use of Big Data + Deep Learning to solve the
                    worlds problems - <span id="climate">climate change</span>, world hunger, and disinformation to name a few. I'm a California native,
                    born and raised in <span id='la'>Los Angeles</span> and currently live in Palo Alto. As someone who excels in chaotic environments and likes to take risks,
                    I am intrigued by entraprenurship. I would love to work at a mission-driven startup after I finish my masters.
                </p>
                <h1>I like</h1>
                <ul>
                    <li>Reading - I strive to always be learning and books are my medium of choice</li>
                    <li>Kite Surfing - I love the ocean and nothing beats being able to fly </li>
                    <li>Debate and Disagreement - I was ranked first nationally in high school for LD debate</li>
                    <li>Poker - Its the perfect blend of probability and human psycology</li>
                    <li>Supporting <span id='tottenham'>Tottenham Hotspur</span>, <span id='lakers'>LA Lakers</span>, and <span id='steelers'>Pittsburgh Steelers</span> </li>
                    <li>Working Out</li>
                    <li>Politics</li>
                    <li>New Experiences - I take comfort in constant change</li>
                </ul>
            </article>
        </div>
    );
}

export default Home;