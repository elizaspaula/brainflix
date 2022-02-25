import "./VideosList.scss";

function VideoList() {
  return (
    <ul className="videos__list">
      <li className="videos__item">
        <video className="videos__source" poster="#"></video>
        <div className="videos__info">
          <h3 className="videos__title">
            Become A Travel Pro in One Easy Lesson
          </h3>
          <p className="videos__owner">Todd Welch</p>
        </div>
      </li>
      <li className="videos__item">
        <video className="videos__source" poster="#"></video>
        <div className="videos__info">
          <h3 className="videos__title">
            Become A Travel Pro in One Easy Lesson
          </h3>
          <p className="videos__owner">Todd Welch</p>
        </div>
      </li>
      <li className="videos__item">
        <video className="videos__source" poster="#"></video>
        <div className="videos__info">
          <h3 className="videos__title">
            Become A Travel Pro in One Easy Lesson
          </h3>
          <p className="videos__owner">Todd Welch</p>
        </div>
      </li>
      <li className="videos__item">
        <video className="videos__source" poster="#"></video>
        <div className="videos__info">
          <h3 className="videos__title">
            Become A Travel Pro in One Easy Lesson
          </h3>
          <p className="videos__owner">Todd Welch</p>
        </div>
      </li>
    </ul>
  );
}

export default VideoList;
