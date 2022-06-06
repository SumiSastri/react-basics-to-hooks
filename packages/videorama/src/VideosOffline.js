import React from "react";
import "./App.css";
import video from "/videos/sculpture.mp4";

// you can conditionally render this component

function VideosOffline() {
  return (
    <div className="App">
      <header className="header">Videorama</header>
      <h2>Offline mode</h2>
      <video src={video} controls height={200} />
    </div>
  );
}

export default VideosOffline;
