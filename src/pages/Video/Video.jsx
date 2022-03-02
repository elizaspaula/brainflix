import TopVideo from "../../components/TopVideo/TopVideo";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideosList/VideosList";
import videoDetails from "../../data/video-details.json";
import videos from "../../data/videos.json";
import React from "react";

function Video(props) {
  const selectVideoId =
    props.match.params.videoId || "84e96018-4022-434e-80bf-000ce4cd12b8";

  // const [selectVideoId, setSelectVideoId] = React.useState(
  //   props.match.params.videoId || "84e96018-4022-434e-80bf-000ce4cd12b8"
  // );

  //Filter the videos data to remove it from VideosList
  const videoList = videos.filter((video) => video.id !== selectVideoId);

  //Find the video details id and pass to VideoList
  const video = videoDetails.find((video) => video.id === selectVideoId);

  return (
    <>
      <TopVideo videoDetail={video} />
      <div className="videoDetails__content">
        <MainVideo videoDetail={video} />
        <VideoList videos={videoList} />
      </div>
    </>
  );
}

export default Video;
