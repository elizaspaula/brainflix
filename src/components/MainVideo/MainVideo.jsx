import "./MainVideo.scss";

function MainVideo() {
  return (
    <main className="video">
      <div className="video__main">
        <video
          className="video__player"
          src="https://i.imgur.com/l2Xfgpl.jpg"
        ></video>
      </div>
      <h1 className="video__title">BMX Rampage: 2021 Highlights</h1>
      <div className="video__info">
        <div className="video__subtitle">
          <h3 className="video__ownership">By Red Crow</h3>
          <p className="video__date">07/11/2021</p>
        </div>
        <div className="video__icons">
          <p className="video__views">1,001,023</p>
          <img src="./assets/icons/views.svg" alt="views" />
          <p className="video__likes">110,985</p>
          <img src="./assets/icons/likes.svg" alt="likes" />
        </div>
      </div>
    </main>
  );
}

export default MainVideo;
