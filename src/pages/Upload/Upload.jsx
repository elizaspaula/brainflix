import React, { Component } from "react";
import Button from "../../components/Button/Button";
import publishIcon from "../../assets/icons/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import axios from "axios";
import { Link } from "react-router-dom";

class Upload extends Component {
  // handleCancelButton = (event) => {
  //   this.props.history.push("/video");
  // };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const videoTitle = event.target.title.value;
    const videoDescription = event.target.description.value;

    //post data to API Server

    axios
      .post(`${process.env.REACT_APP_API_URL}/videos`, {
        title: videoTitle,
        description: videoDescription,
      })
      .then(() => {
        event.target.reset();
        this.sayAlert();
        this.props.history.push("/video");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  sayAlert() {
    alert("Your video is being uploaded!");
  }

  render() {
    // console.log(this.props);
    return (
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form onSubmit={this.handleFormSubmit} className="upload__form">
          <div className="upload__wrapper">
            <div className="upload__video">
              <p className="upload__label">video thumbnail</p>
              <img
                src={uploadPreview}
                className="upload__video-preview"
                alt="video"
              ></img>
            </div>
            <div className="upload__group">
              <p className="upload__label">title your video</p>
              <textarea
                id="title"
                name="title"
                placeholder="Add a title to your video"
                className="upload__video-title"
                autoFocus
                required="required"
              ></textarea>
              <p className="upload__label">add a video description</p>
              <textarea
                id="description"
                name="description"
                placeholder="Add a description to your video"
                className="upload__video-description"
                autoFocus
                required="required"
              ></textarea>
            </div>
          </div>
          <div className="upload__upload-btn">
            <Button>
              <img
                className="upload__icon"
                src={publishIcon}
                alt="upload icon"
              />
              <p className="upload__content-btn">publish</p>
            </Button>

            <div className="upload__cancel-btn">
              <Link className="upload__cancel" to="/video">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;
