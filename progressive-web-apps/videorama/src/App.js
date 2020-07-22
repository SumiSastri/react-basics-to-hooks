import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [ovVideoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      const ovVideoData = await fetch(
        "https://orangevalleycaa.org/api/videos"
      ).then((response) => response.json());
      setVideoData(ovVideoData);
      console.log(ovVideoData, "logs ovVideoData");
    };
    fetchVideoData();
  }, []);

  return (
    <div className="App">
      <header className="header">Videorama</header>
      {ovVideoData.map((video) => (
        <div className="video-container" key={video.video_url}>
          <h2> {video.name}</h2>
          <video className="videos"></video>
        </div>
      ))}
    </div>
  );
}

export default App;
