import "./TopVideo.scss";
import playerBtn from "../../assets/icons/play.svg";
import volumeUp from "../../assets/icons/volume_up.svg";
import fullScreen from "../../assets/icons/fullscreen.svg";

function TopVideo({ videoDetail }) {
  return (
    <div className="player">
      <div className="player__content">
        <video className="player__video" poster={videoDetail.image}></video>
        <div className="player__controls" data-state="hidden">
          <button className="player__play btn" type="button" data-state="play">
            <img className="playerBtn" src={playerBtn} alt="player icon" />
          </button>
          <div className="player__progress">
            <progress
              className="player__progress-bar"
              value="0"
              min="0"
            ></progress>
            <span className="player__time">00:00/4:01</span>
          </div>
          <div className="player__wrapper">
            <button
              className="player__fullscreen btn"
              type="button"
              data-state="go-fullscreen"
            >
              <img
                className="fullscreen"
                src={fullScreen}
                alt="fullscreen icon"
              />
            </button>
            <button
              className="player__volume-up btn"
              type="button"
              data-state="volup"
            >
              <img className="volumeUp" src={volumeUp} alt="volume up icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopVideo;
