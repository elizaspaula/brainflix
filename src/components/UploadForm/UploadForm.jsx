import Button from "../Button/Button";
import publishIcon from "../../assets/icons/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadForm.scss";

function UploadForm() {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__wrapper">
        {/* <p className="upload__label">video thumbnail</p> */}
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
            cols="30"
            rows="1"
            className="upload__video-title"
            autoFocus
            required="required"
          ></textarea>
          <p className="upload__label">add a video description</p>
          <textarea
            id="title"
            name="title"
            placeholder="Add a description to your video"
            cols="30"
            rows="5"
            className="upload__video-description"
            autoFocus
            required="required"
          ></textarea>
        </div>
      </div>
      <div className="upload__upload-btn">
        <Button>
          <img className="upload__icon" src={publishIcon} alt="upload icon" />
          <p className="upload__content-btn">publish</p>
        </Button>
        <div className="upload__cancel-btn">
          <button className="upload__cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default UploadForm;
