import TopVideo from "../../components/TopVideo/TopVideo";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideosList/VideosList";
import React, { Component } from "react";
import axios from "axios";

class Video extends Component {
  state = {
    selectedVideo: null,
    videos: [],
  };

  componentDidMount() {
    this.getAllVideos(this.props.match.params.videoId);
  }

  componentDidUpdate(prevProps, prevState) {
    let videoId = this.props.match.params.videoId;
    if (videoId && videoId !== prevProps.match.params.videoId) {
      this.getVideoDetails(videoId).then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      });
    }
  }

  //  GET /videos from API
  getAllVideos(selectedId) {
    return axios
      .get(`/videos`)
      .then((response) => {
        this.setState({
          videos: response.data,
        });
        return this.getVideoDetails(selectedId || response.data[0].id);
      })
      .then((response) => {
        this.setState({
          selectedVideo: response.data,
        });
      });
  }

  getVideoDetails(id) {
    return axios.get(`/videos/${id}`);
  }

  render() {
    const videoList =
      // (condition) ? 'if condition is true' : 'if condition is false'
      this.state.selectedVideo === null
        ? []
        : this.state.videos.filter(
            (video) => video.id !== this.state.selectedVideo.id
          );

    return !this.state.selectedVideo ? null : (
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
