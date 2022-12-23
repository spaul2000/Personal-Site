import React, { useState, useEffect } from 'react';
import axios from 'axios';


function SpotifyArtists() {
    const [isLoading, setLoading] = useState(true);
    const [artists, setArtists] = useState();



    useEffect(() => {
        axios.get('/artists').then(response => {
            setArtists(response.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div ></div>;
    }
    console.log('artists: ', artists)
    return (
        <ol>
            {artists.map(artist => (
                <li key={artist}>{artist}</li>
            ))}
        </ol >
    );
}

export default SpotifyArtists;
