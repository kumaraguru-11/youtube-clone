import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [channelVideo, setChannelVideos] = useState([]);

  //Fetching Data
  const api = "AIzaSyAngL29mLPcEAEEc7swgEgyV8GWH4N6jIQ";
  const fetchurl = `https://www.googleapis.com/youtube/v3/channels?key=${api}&part=snippet,contentDetails,statistics&id=${id}`;


  useEffect(() => {
    //Fetch channel details eg(channel name,subscriber count,img etc).
    fetch(fetchurl)
      .then((response) => response.json())
      .then((data) => {
        setChannelDetail(data?.items[0]);
      });

      //Fetch Particular Channel Videos based on channelId.
    fetch(
      `https://www.googleapis.com/youtube/v3/search?channelId=${id}&key=${api}&part=snippet&type=video&maxResults=50&order=date&type=video`
    )
      .then((response) => response.json())
      .then((data) => {
        setChannelVideos(data?.items);
      });
  }, [id, fetchurl]);


  return (
    <div style={{ minHeight: "91vh" }}>
      <div
        style={{
          height: "200px",
          zIndex: "10",
          background:
            "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
        }}
      />
      <ChannelCard channelDetail={channelDetail} />
      <div className="p-4">
        <Videos videos={channelVideo}/>
      </div>
    </div>
  );
};

export default ChannelDetail;
