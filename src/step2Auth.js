var SpotifyWebApi = require('spotify-web-api-node');

var credentials = {
    clientId: 'df29578d48e74fd2862a4a52838baaba',
    clientSecret: '3ac39f9474284eb5b1ef7371fd4ff121',
    redirectUri: 'http://localhost:8888/callback'
};

var spotifyApi = new SpotifyWebApi(credentials);

// The code that's returned as a query parameter to the redirect URI
const code = "AQBXjZa8v-B4MxbX4EX9j-Yp2Ncc7IwnRBuET_NCEADG_eVGjF5RwqQQszVc8A19hfRLWsnAkYTlL_A0D8Hwkv12ZXcM6SE_aVtdvxCYwp4Nzw8NLnThczR4obm16Ar_6quzoOiOOx7ibs3vF3Up_paAg21e7GAJTdlnghF-8OK4hdnilfKDZ3rAnJQeExReVBrjLwnMX9CiKgnx54DARVoAG0hfayIQ71sBi4yjuK-zhp5EyPYSbsVLSQaXmal3EY5OhKTShU5GabQN_RUHimk8KqvjHuTrc_pXV68zXxLIVywS59KL84bJ4c_CLrPyv2djgqQff1xpNstZZtqr6mfn8fI7m0iRVFtdp-v5lO2tnDvZMFjz0pQ";

// Retrieve an access token and a refresh token
spotifyApi
    .authorizationCodeGrant(code)
    .then(function (data) {
        const access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];

        console.log('access_token:', access_token);
        console.log('refresh_token:', refresh_token);
    })
    .catch(function (err) {
        console.log('Something went wrong:', err.message);
    });
