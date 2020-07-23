import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "../src/assets/logo.png";

function App() {
  const [ovVideoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      const ovVideoData = await fetch(
        "https://orangevalleycaa.org/api/videos"
      ).then((response) => response.json());
      setVideoData(ovVideoData);
    };
    fetchVideoData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <img alt="logo" src={logo} style={{ height: "150px" }} />
        <h1>Videorama</h1>
        <h4>A Progressive Web App with React-Hooks</h4>
      </header>
      {ovVideoData.map((video) => (
        <div className="video-container" key={video.video_url}>
          <video className="videos" controls src={video.video_url} />
          <h2> {video.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
