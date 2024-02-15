import { Link } from "react-router-dom";
import React from "react";
import { MdVerified } from "react-icons/md";

const ChannelCard = ({ channelDetail }) => {
  return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "#fff",
          alignItems: "center",
          marginTop: "-5rem",
        }}
      >
        <Link
          to={`/channel/${channelDetail?.snippet?.channelId}`}
          style={{ textDecoration: "none" }}
        >
          <img
            src={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            style={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <div
            style={{ color: "#fff", fontSize: "1.5rem", marginLeft: "1rem" }}
          >
            {channelDetail?.snippet?.title}
            <span className="m-1" style={{ fontSize: "15px" }}>
              {" "}
              <MdVerified style={{ marginBottom: "20px", opacity: ".5" }} />
            </span>
          </div>
          <p className="text-light">
            {channelDetail?.statistics?.subscriberCount &&
              parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
            Subscribers
          </p>
        </Link>
      </div>
  );
};

export default React.memo(ChannelCard);
