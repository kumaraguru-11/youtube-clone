import React, { useState, useEffect } from "react";
import Videos from "./Videos";
import { fetchfromAPI, api } from "../utils/fetchingAPI";
import { useParams, Link } from "react-router-dom";

const Feed = () => {
  const [videos, setVideos] = useState([]);

  //Get type text from SearchBar component has a params.
  const { searchTerm } = useParams();

  //Fetch API based on search text.
  useEffect(() => {
    fetchfromAPI(
      `search?key=${api}&part=snippet,id&order=videoCount&maxResults=50&q=${searchTerm}&type=video&videoDuration=medium`
    )
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(error));
  }, [searchTerm]);

  return (
    <section
      className="p-2"
      style={{
        height: "auto",
        maxHeight: "100vh",
        // flex: 2,
      }}
    >
      {videos.length > 0 ? (
        <Videos videos={videos} />
      ) : (
        <div
          style={{
            color: "#fff",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          Does not match any results!
          <Link to={`/`}>Go to Home...</Link>
        </div>
      )}
    </section>
  );
};

export default Feed;
