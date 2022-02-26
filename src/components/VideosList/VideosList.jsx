import "./VideosList.scss";

function VideoList({ videos, setSelectVideoId }) {
  return (
    <ul className="videos">
      {videos.map((video) => (
        <li
          className="videos__item"
          key={video.id}
          onClick={() => {
            setSelectVideoId(video.id);
          }}
        >
          <div className="test">
            <img className="videos__image" src={video.image} />
          </div>

          <div className="videos__info">
            <p className="videos__title bold">{video.title}</p>
            <p className="videos__owner">{video.channel}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default VideoList;
