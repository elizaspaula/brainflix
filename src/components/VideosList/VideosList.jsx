import "./VideosList.scss";

function VideoList({ videos, setSelectVideoId }) {
  return (
    <ul className="videos__list">
      {videos.map((video) => (
        <li
          className="videos__item"
          key={video.id}
          onClick={() => {
            setSelectVideoId(video.id);
          }}
        >
          <video className="videos__image" poster={video.image}></video>
          <div className="videos__info">
            <h3 className="videos__title">{video.title}</h3>
            <p className="videos__owner">{video.channel}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default VideoList;
