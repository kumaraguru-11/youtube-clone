// src/setupProxy.js
// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/youtubeApi",
//     createProxyMiddleware({
//       target: "https://www.googleapis.com",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/youtubeApi": "/youtube/v3",
//       },
//     })
//   );
// };

// utils/fetchingAPI.js
// import axios from "axios";

// export const api = "AIzaSyAngL29mLPcEAEEc7swgEgyV8GWH4N6jIQ";
// // const baseurl = '/youtubeApi'; // Use the proxy URL
// const baseurl = process.env.REACT_APP_API_URL || "/youtubeApi"; // Use the proxy URL

// export const fetchfromAPI = async (url) => {
//   const { data } = await axios.get(`${baseurl}/${url}`);

//   return data;
// };





import axios from "axios";

export const api = "AIzaSyAngL29mLPcEAEEc7swgEgyV8GWH4N6jIQ";
const baseurl='https://www.googleapis.com/youtube/v3'

export const fetchfromAPI=async(url)=>{
    const {data}=  await axios.get(`${baseurl}/${url}`)//todo,options

    return data;
}

//!Example Fetching API use it in Feed.jsx file
//const api = "AIzaSyAngL29mLPcEAEEc7swgEgyV8GWH4N6jIQ";
// const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${api}&part=snippet,id&order=videoCount&maxResults=10&q=react&type=video`;
// useEffect(() => {
//   fetch(fetchurl).then(response=>response.json()).then((data)=>{
//     console.log(data.items)
//     setIds(data.items);
//   })
// }, []);
