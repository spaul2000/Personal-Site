import React, { useState, useEffect } from 'react';
import axios from 'axios';


function SpotifySongs() {
    const [isLoading, setLoading] = useState(true);
    const [songs, setSongs] = useState();



    useEffect(() => {
        axios.get('/songs').then(response => {
            setSongs(response.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div ></div>;
    }
    console.log('songs: ', songs)
    return (
        <ol>
            {songs.map(song => (
                <li key={song}>{song}</li>
            ))}
        </ol >
    );
}

export default SpotifySongs;
