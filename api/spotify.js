// https://thomasmoran.dev/snippets/spotify-currently-playing/spotify-currently-playing/

console.log("spotify!");
var axios = require("axios");
var querystring = require("querystring");
var fetch = require("node-fetch");

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;
const basicAuth = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");

export default async function handler(_req, _res) {
  // const response = await fetch(
  //   "https://accounts.spotify.com/api/token",
  //   querystring.stringify({
  //     grant_type: "refresh_token",
  //     refresh_token: refreshToken,
  //   }),
  //   {
  //     headers: {
  //       Authorization: `Basic ${basicAuth}`,
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   }
  // );

  let response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });
  response = await response.json();

  const accessToken = response.access_token;

  let nowPlaying = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  nowPlaying = await nowPlaying.json();
  console.log(nowPlaying)

  if (!nowPlaying.is_playing || nowPlaying.is_playing === false) {
    return _res.status(200).json({ isPlaying: false });
  } 

  return _res.status(200).json(nowPlaying);
}
