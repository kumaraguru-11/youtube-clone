import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const api = "AIzaSyAngL29mLPcEAEEc7swgEgyV8GWH4N6jIQ";
  const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${api}&part=snippet,id&order=videoCount&maxResults=50&q=${selectedCategory}&type=video&videoDuration=medium`;

  useEffect(() => {
    //Fetch channel details eg(channel name,subscriber count,img etc).
    fetch(fetchurl)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data?.items);
      })
      .catch((error) => console.log(error));
  }, [fetchurl, selectedCategory]);


  return (
    <Container fluid className="d-flex flex-md-row flex-column">
      {/*Sidebar */}
      <div
        style={{
          height: "auto",
          maxHeight: "91vh",
          borderRight: "2px solid #3d3d3d",
        }}
        className="px-0 px-sm-2 "
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* Video Section */}
      <section
        className="p-1"
        style={{
          height: "auto",
          maxHeight: "91vh",
          width: "100%",
        }}
      >
        <div className="h3 fw-bold">
          {selectedCategory}
          <span style={{ color: "red", marginLeft: "10px" }}>videos</span>
        </div>
        {videos ? (
          <Videos videos={videos} />
        ) : (
          <div
            style={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Something went wrong!</h1>
          </div>
        )}
      </section>
    </Container>
  );
};

export default Feed;
