import "./VideosNav.scss";
import { Link } from "react-router-dom";
import uploadIcon from "../../assets/icons/upload.svg";

//images
import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";

//sub-components
import Avatar from "../Avatar/Avatar";

function VideosNav() {
  return (
    <header className="logo">
      <div className="logo__image">
        <Link to={"/video"}>
          <img className="logo__logo" src={logo} alt="logo" />
        </Link>
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
        <div className="logo__button tablet">
          <Link className="logo__link" to={"/video/upload"}>
            <img className="logo__icon" src={uploadIcon} alt="upload icon" />
            <p className="logo__content">upload</p>
          </Link>
        </div>
        <Avatar />
      </div>
      <div className="logo__button mobile">
        <Link className="logo__link" to={"/video/upload"}>
          <img className="logo__icon" src={uploadIcon} alt="upload icon" />
          <p className="logo__content">upload</p>
        </Link>
      </div>
    </header>
  );
}

export default VideosNav;
