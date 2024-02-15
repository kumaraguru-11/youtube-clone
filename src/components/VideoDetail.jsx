import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState("");
  const { id } = useParams();

  //Data Fetching
  const api = "AIzaSyAngL29mLPcEAEEc7swgEgyV8GWH4N6jIQ";
  const fetchurl = `https://www.googleapis.com/youtube/v3/videos?key=${api}&part=snippet,contentDetails,statistics&id=${id}`;

  useEffect(() => {
    //Fetch video id for playing video in my project.
    fetch(fetchurl).then((data) => {
      setVideoDetail(data);
    });
  }, [fetchurl]);
  console.log(videoDetail);
  return (
    <div style={{ minHeight: "95vh" }}>
      <div style={{ position: "sticky", top: "60px", width: "100%" }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          controls
        />
      </div>
    </div>
  );
};

export default VideoDetail;
