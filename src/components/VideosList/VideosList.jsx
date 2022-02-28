import "./VideosList.scss";

function VideoList({ videos, setSelectVideoId }) {
  return (
    <ul className="videos">
      <li className="videos__label">next videos </li>

      {videos.map((video) => (
        <li
          className="videos__item"
          key={video.id}
          onClick={() => {
            setSelectVideoId(video.id);
          }}
        >
          <div className="videos__group">
            <img
              className="videos__image"
              src={video.image}
              alt={video.title}
            />
          </div>

          <div className="videos__info">
            <p className="videos__title">{video.title}</p>
            <p className="videos__channel">{video.channel}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default VideoList;
