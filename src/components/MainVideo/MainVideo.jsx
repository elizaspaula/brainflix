import "./MainVideo.scss";

//images
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentList from "../CommentList/CommentList";

function MainVideo({ videoDetail }) {
  return (
    <>
      <main className="video">
        <div className="video__group">
          <h1 className="video__title">{videoDetail.title}</h1>
          <div className="video__info">
            <div className="video__subtitle">
              <h3 className="video__channel">By {videoDetail.channel}</h3>

              <p className="video__date responsible">
                {new Date(videoDetail.timestamp).toLocaleDateString()}
              </p>

              <div className="video__wrapper tablet ">
                <img className="video__view" src={viewIcon} alt="views" />
                <p className="video__numbers">{videoDetail.views}</p>
              </div>
            </div>
            <div className="video__subtitle">
              <p className="video__date">
                {new Date(videoDetail.timestamp).toLocaleDateString()}
              </p>

              <div className="video__wrapper responsible">
                <img className="video__view" src={viewIcon} alt="views" />
                <p className="video__numbers">{videoDetail.views}</p>
              </div>

              <div className="video__wrapper">
                <img className="video__like" src={likeIcon} alt="likes" />
                <p className="video__numbers-likes">{videoDetail.likes}</p>
              </div>
            </div>
          </div>
          <div className="video__description">
            <p className="video__description-content">
              {videoDetail.description}
            </p>
          </div>
          <h3 className="video__comments">
            {videoDetail.comments.length} Comments{" "}
          </h3>
          <CommentsForm />
          <CommentList comments={videoDetail.comments} />
        </div>
      </main>
    </>
  );
}

export default MainVideo;
