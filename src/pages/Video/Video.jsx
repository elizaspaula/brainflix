import TopVideo from "../../components/TopVideo/TopVideo";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideosList/VideosList";
import React, { Component } from "react";
import axios from "axios";

const apiKey = "a9175e1c-dee7-45ad-88aa-6fb8332c5712";

class Video extends Component {
  state = {
    selectedVideo: null,
    videos: [],
  };

  componentDidMount() {
    this.getAllVideos();
  }

  componentDidUpdate(prevProps, prevState) {
    let videoId = this.props.match.params.videoId;
    if (videoId !== prevProps.match.params.videoId) {
      this.getVideoDetails(videoId).then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      });
    }
  }

  //  GET /videos from API
  getAllVideos() {
    return axios
      .get(` https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
      .then((response) => {
        this.setState({
          videos: response.data,
        });
        return this.getVideoDetails(response.data[0].id);
      })
      .then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      });
  }

  getVideoDetails(id) {
    return axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey}`
    );
  }

  render() {
    const videoList =
      // (condition) ? 'if condition is true' : 'if condition is false'
      this.state.selectedVideo === null
        ? []
        : this.state.videos.filter(
            (video) => video.id !== this.state.selectedVideo.id
          );

    return this.state.selectedVideo === null ? null : (
      <>
        <TopVideo videoDetail={this.state.selectedVideo} />
        <div className="videoDetails__content">
          <MainVideo videoDetail={this.state.selectedVideo} />
          <VideoList videos={videoList} />
        </div>
      </>
    );
  }
}

export default Video;
