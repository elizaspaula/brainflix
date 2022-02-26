import "./VideosNav.scss";
import uploadIcon from "../../assets/icons/upload.svg";

//images
import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";

//sub-components
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

function VideosNav() {
  return (
    <header className="logo">
      <div className="logo__image">
        <img className="logo__logo" src={logo} alt="logo" />
      </div>
      <div className="logo__search">
        <div className="logo__text">
          <img className="logo__img" src={searchIcon} alt="search icon" />
          <input
            className="logo__input"
            type="text"
            placeholder="Search"
            autoFocus
          />
        </div>
        <Avatar />
      </div>
      <Button>
        <img className="logo__icon" src={uploadIcon} alt="upload icon" />
        <p className="logo__content">upload</p>
      </Button>
    </header>
  );
}

export default VideosNav;
