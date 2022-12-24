var SpotifyWebApi = require('spotify-web-api-node');
const express = require('express');
const app = new express();
const path = require('path')

app.use('/', express.static(path.join(__dirname + '/build')));

// Create the api object with the credentials
const spotifyapi = new SpotifyWebApi({
    redirectUri: "http://localhost:8888/callback",
    clientId: "df29578d48e74fd2862a4a52838baaba",
    clientSecret: "3ac39f9474284eb5b1ef7371fd4ff121",
});

let access_token = 'BQBS7D5j7uIKNTLEoyaskWBlaNGfa_4LYtV1iqo0vDx6Tki1nR3b9lyVQxektxXLZft5k3FBGLiljNLiqUV2xIZyXw9hyD_5_bMPaT1W0uGXoQo_FBcNMFDIp1kTgdYIb3e8l3jSS4X97znVkOVlIrmuKSSqloR8xEKWt9m0iEnl4D8TyOIGLhckZfdH_y6n3c-f4WqDKhDI004KM3LrZg'
let refresh_token = 'AQBKeiJ28surb1njTK4i4CoLSZg1qLkfib2X3-HGVLdSvExXg9oM4GsCbH65wOD0scXQc1B3uN51MR6WDNbGFUGtU9fiCXJophIZCicHCTF5o9sW7e4u_xH1CoqLr4bWVuA'
spotifyapi.setAccessToken(access_token);
spotifyapi.setRefreshToken(refresh_token);

app.get("/artists", (req, res) => {
    spotifyapi.getMyTopArtists({ limit: 10 }).then((data) => {
        let topArtists = data.body.items;
        let names = topArtists.map(artist => artist.name)
        console.log(topArtists);
        console.log(names)
        res.send(names);
    }).catch((err) => {
        console.log(err);
        spotifyapi.refreshAccessToken()
        res.status(400).send(err);
    });
});

app.get("/songs", (req, res) => {
    console.log("got the request");

    spotifyapi.getMyTopTracks({ limit: 30 }).then((data) => {
        let topSongs = data.body.items;
        let songsAndArtist = topSongs.map(song => [song.name, song.artists])
        let songs = topSongs.map(song => song.name)
        let artist = topSongs.map(song => song.artists)
        console.log(songsAndArtist)
        console.log(songs)
        console.log(artist)

        res.send(songs);
    }).catch((err) => {
        console.log(err);
        spotifyapi.refreshAccessToken()
        res.status(400).send(err);
    });
});


function refreshSpotifyToken() {
    spotifyapi.refreshAccessToken().then(
        function (data) {

            // Save the access token so that it's used in future calls
            spotifyapi.setAccessToken(data.body['access_token']);

        },
        function (err) {
            console.log('Could not refresh access token', err);
        });
};

setInterval(refreshSpotifyToken, 1000);

app.listen(3001, () => {
    console.log(
        'HTTP Server up. Now go to http://localhost:3001/ in your browser.'
    )
}
);