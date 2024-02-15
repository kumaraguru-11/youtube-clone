import React from "react";
import VideoCard from "./VideoCard";

//get props from Feed component
const Videos = ({ videos }) => {
  return (
    <div
      style={{
        overflowY: "auto",
        height: "83vh",
        marginLeft: "2px",
      }}
      className="row"
    >
      {videos.map((item, id) => (
        <div key={id} className="col-md-4 col-sm-6 col-lg-3 mb-4">
          {item.id.videoId && <VideoCard video={item} />}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Videos);
