import "./VideosNav.scss";

//images
import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";

//sub-components
import Avatar from "../Avatar/Avatar";
import Buttons from "../Buttons/Buttons";

function VideosNav() {
  return (
    <header className="logo">
      <div className="logo__image">
        <img className="logo__logo" src={logo} alt="logo" />
      </div>
      <div className="logo__search">
        <input
          className="logo__input"
          type="text"
          placeholder="Search"
          src={searchIcon}
        />
        <Avatar />
      </div>
      <Buttons />
    </header>
  );
}

export default VideosNav;
