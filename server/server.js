const express = require("express");
const cors = require("cors")
const spotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser");

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/login2", (req,res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirectUri:"http://localhost:3000",
    clientId:"2dba1902f6c941aeb5d5f283a7e2e873",
    clientSecret:"93f964fcf18444a7b9b9ec5934340862"
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.get('/test',(req,res) => {
    res.json({"tedt":"h"})
})

app.listen(3001)