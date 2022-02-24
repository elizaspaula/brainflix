import "./Buttons.scss";
import uploadIcon from "../../assets/icons/upload.svg";

function Buttons() {
  return (
    <div className="logo__upload">
      <input
        className="logo__upload btn"
        type="button"
        value="Upload"
        src={uploadIcon}
      />
    </div>
  );
}

export default Buttons;
