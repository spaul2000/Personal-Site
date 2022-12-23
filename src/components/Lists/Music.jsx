import React, { Component } from 'react';
import CategoryButton from './CategoryButton';
import SpotifyArtists from './SpotifyArtists';
import SpotifySongs from './SpotifySongs';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicButtons: {
                artists: true,
                songs: false
            }
        }
    }

    getButtons() {
        console.log(this.state.musicButtons.artists)
        return Object.keys(this.state.musicButtons).map((key) => (
            <CategoryButton
                label={key}
                key={key}
                active={this.state.musicButtons[key]}
                handleClick={this.handleMusicClick}
            />
        ));
    }

    handleMusicClick = (label) => {
        console.log('clicked: ', label)
        this.setState((prevState) => {
            let buttons = Object.keys(prevState.musicButtons);
            let updatedState = {};
            for (let i = 0; i < buttons.length; i++) {
                let key = buttons[i];
                let value = (key === label);
                updatedState[key] = value;
            }
            console.log("updated state: ", updatedState)

            return { musicButtons: updatedState };
        })
    }

    render() {
        console.log(this.state.musicButtons)
        return (
            < div className="music" >
                <div className="link-to" id="music" />
                <div className="title">
                    <h3>Music</h3>
                    <p>
                        A list of my current top 10 artists and songs updated constantly using the Spotify API
                    </p>
                </div>
                <div className="skill-button-container">
                    {this.getButtons()}
                </div>
                {this.state.musicButtons['artists'] ? <SpotifyArtists /> : <SpotifySongs />}
            </div >
        );
    }
}

export default Music;