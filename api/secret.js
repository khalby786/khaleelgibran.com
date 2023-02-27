// import axios from "axios";
// import querystring from "querystring";

// export default function handler(req, res) {
//   axios
//     .post(
//       "https://accounts.spotify.com/api/token",
//       querystring.stringify({
//         grant_type: "authorization_code",
//         code: process.env.CODE,
//         redirect_uri: "http://localhost:3000",
//       }),
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Authorization:
//             "Basic " +
//             Buffer.from(
//               process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
//             ).toString("base64"),
//         },
//       }
//     )
//     .then((response) => {
//       console.log(response)
//       res.send(response);
//     });
// }
