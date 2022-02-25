import "./MainVideo.scss";

//images
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentList from "../CommentList/CommentList";

function MainVideo({ videoDetail }) {
  return (
    <main className="video">
      <div className="video__main">
        <video className="video__player" poster={videoDetail.image}></video>
      </div>
      <h1 className="video__title">{videoDetail.title}</h1>
      <div className="video__info">
        <div className="video__subtitle">
          <h3 className="video__ownership">{videoDetail.channel}</h3>
          <div className="video__wrapper">
            <img className="video__view" src={viewIcon} alt="views" />
            <p className="video__numbers">{videoDetail.views}</p>
          </div>
        </div>
        <div className="video__subtitle">
          <p className="video__date">{videoDetail.timestamp}</p>
          <div className="video__wrapper">
            <img className="video__like" src={likeIcon} alt="likes" />
            <p className="video__numbers">{videoDetail.likes}</p>
          </div>
        </div>
      </div>
      <div className="video__description">
        <p>{videoDetail.description}</p>
      </div>
      <h3 className="video__comments">
        {videoDetail.comments.length} Comments{" "}
      </h3>
      <CommentsForm />
      <CommentList comments={videoDetail.comments} />
    </main>
  );
}

export default MainVideo;
