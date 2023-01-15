const express = require("express");
const cors = require("cors")
const spotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser");

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/login", (req,res) => {
    const code = req.body.code;
    const credentials = new spotifyWebApi({
        redirectUri:"http://localhost:3001/",
        clientId:"2dba1902f6c941aeb5d5f283a7e2e873",
        clientSecret:"347c91077923427abd5f4444ffce0246"
    })
    const spotifyApi = new SpotifyWebApi(credentials);

    spotifyApi.authorizationCodeGrant(code).then(
        function(data) {
          console.log('The token expires in ' + data.body['expires_in']);
          console.log('The access token is ' + data.body['access_token']);
          console.log('The refresh token is ' + data.body['refresh_token']);
      
          // Set the access token on the API object to use it in later calls
          spotifyApi.setAccessToken(data.body['access_token']);
          spotifyApi.setRefreshToken(data.body['refresh_token']);
        },
        function(err) {
          console.log('Something went wrong!', err);
        }
      );
})

app.get('/test',(req,res) => {
    res.json({"tedt":"h"})
})

app.listen(3001)