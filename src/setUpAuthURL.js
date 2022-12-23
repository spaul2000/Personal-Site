var SpotifyWebApi = require('spotify-web-api-node');
var scopes = [
    "user-read-private",
    "user-read-email",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-follow-read",
    // "playlist-read-private",
    // "playlist-read-collaborative",
    // "user-library-read",
    // "user-read-playback-position",
    // "user-read-currently-playing",
    // "user-read-recently-played",
    "user-top-read",
    "user-follow-read",
    // "playlist-read-collaborative",
    // "user-library-read",
    // "user-read-birthdate",
    // "user-read-private"
],
    redirectUri = 'http://localhost:8888/callback',
    clientId = 'df29578d48e74fd2862a4a52838baaba',
    state = 'some-state-of-my-choice';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);

