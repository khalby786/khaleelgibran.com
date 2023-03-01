// https://thomasmoran.dev/snippets/spotify-currently-playing/spotify-currently-playing/


const axios = require("axios")
const querystring = require("querystring");

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;
const basicAuth = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");

export default async function handler(_req, _res) {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    {
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  const accessToken = response.data.access_token;

  const nowPlaying = await axios.get(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (nowPlaying .status === 204 || nowPlaying.status >= 400) {
    return _res.status(200).json({ isPlaying: false })
  }

  return _res.status(200).json(nowPlaying.data);
}
