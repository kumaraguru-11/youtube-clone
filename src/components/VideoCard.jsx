import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { MdVerified } from "react-icons/md";


//get props form videos component
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      className="card-width bg-dark bg-gradient text-light border border-light"
    >
      <Link to={videoId ? `/video/${videoId}` : ""}>
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          style={{
            width: "100%",
            objectFit: "fill",
            height: "13rem",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-evenly",
          padding: "10px",
        }}
      >
        <Link
          to={videoId ? `/video/${videoId}` : ""}
          style={{ textDecoration: "none" }}
          className="video-card-title"
        >
          <p className="text-light video-card-title">{snippet?.title}</p>
        </Link>
        <Link
          to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ""}
          style={{ textDecoration: "none" }}
        >
          <div className="fs-6 opacity-50 d-flex align-items-center text-light">
            {snippet?.channelTitle}
            <span className="m-1">
              <MdVerified />
            </span>
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default VideoCard;
