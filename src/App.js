import React from "react";
import "./App.css";
import MainVideo from "./components/MainVideo/MainVideo";
import TopVideo from "./components/TopVideo/TopVideo";
import VideoList from "./components/VideosList/VideosList";
import VideosNav from "./components/VideosNav/VideosNav";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import "./components/AppVideos/AppVideos.scss";

function App() {
  //Create useState Hook and initialize videoID
  const [selectVideoId, setSelectVideoId] = React.useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  //Filter the videos data to remove it from VideosList
  const videoList = videos.filter((video) => video.id !== selectVideoId);

  //Find the video details id and pass to VideoList
  const video = videoDetails.find((video) => video.id === selectVideoId);

  return (
    <div className="App">
      <VideosNav />
      <TopVideo videoDetail={video} />
      <div className="videoDetails__content">
        <MainVideo videoDetail={video} />
        <VideoList videos={videoList} setSelectVideoId={setSelectVideoId} />
      </div>
    </div>
  );
}

export default App;
