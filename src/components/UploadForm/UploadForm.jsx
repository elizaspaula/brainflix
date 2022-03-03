import Button from "../Button/Button";
import uploadIcon from "../../assets/icons/upload.svg";

function UploadForm() {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <p className="upload__label">video thumbnail</p>
      <img src="#" className="upload__video" alt="video"></img>
      <p className="upload__label">title your video</p>
      <textarea
        id="title"
        name="title"
        placeholder="Add a title to your video"
        cols="30"
        rows="5"
        className="upload__videotitle"
        autoFocus
        required="required"
      ></textarea>
      <p className="upload__label">add a video description</p>
      <textarea
        id="title"
        name="title"
        placeholder="Add a title to your video"
        cols="30"
        rows="5"
        className="upload__videotitle"
        autoFocus
        required="required"
      ></textarea>
      <Button>
        <img className="upload__icon" src={uploadIcon} alt="upload icon" />
        <p className="upload__content">publish</p>
      </Button>
      <button className="upload__cancel"></button>
    </div>
  );
}

export default UploadForm;
