import React from "react";
import "./App.css";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoList from "./components/VideosList/VideosList";
import VideosNav from "./components/VideosNav/VideosNav";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";

function App() {
  const [selectVideoId, setSelectVideoId] = React.useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  const videoList = videos.filter((video) => video.id !== selectVideoId);
  const video = videoDetails.find((video) => video.id === selectVideoId);

  return (
    <div className="App">
      <body>
        <VideosNav />
        <MainVideo videoDetail={video} />
        <VideoList videos={videoList} setSelectVideoId={setSelectVideoId} />
      </body>
    </div>
  );
}

export default App;
