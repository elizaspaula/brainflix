import "./MainVideo.scss";

//images
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentList from "../CommentList/CommentList";

function MainVideo() {
  return (
    <main className="video">
      <div className="video__main">
        <video className="video__player" poster="#"></video>
      </div>
      <h1 className="video__title">BMX Rampage: 2021 Highlights</h1>
      <div className="video__info">
        <div className="video__subtitle">
          <h3 className="video__ownership">By Red Crow</h3>
          <div className="video__wrapper">
            <img className="video__view" src={viewIcon} alt="views" />
            <p className="video__numbers">1,001,023</p>
          </div>
        </div>
        <div className="video__subtitle">
          <p className="video__date">07/11/2021</p>
          <div className="video__wrapper">
            <img className="video__like" src={likeIcon} alt="likes" />
            <p className="video__numbers">110,985</p>
          </div>
        </div>
      </div>
      <div className="video__description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, esse.
          Aut consectetur necessitatibus illum officiis ea. Commodi cumque qui
          sequi praesentium? Sapiente doloremque reiciendis eius atque
          reprehenderit voluptas maiores et. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Labore qui modi adipisci illo, atque
          enim. Repellendus minima distinctio tenetur consequuntur maiores
          voluptate! Fugit laudantium beatae vel quidem illum eos ullam.
        </p>
      </div>
      <h3 className="video__comments">3 Comments</h3>
      <CommentsForm />
      <CommentList />
    </main>
  );
}

export default MainVideo;
