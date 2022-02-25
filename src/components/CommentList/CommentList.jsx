import "./CommentList.scss";
import { v4 as uuid } from "uuid";

function CommentList({ comments }) {
  return (
    <>
      <ul className="comments__list">
        {comments.map((comment) => (
          <li className="comments__item" key={uuid()}>
            <div className="comments__content">
              <div className="comments__avatar">
                <div className="avatar"></div>
              </div>
              <div className="comments__info">
                <div className="comments__info_wrapper">
                  <p className="comments__info__name">{comment.name}</p>
                  <p className="comments__info__date">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <p className="comments__info__text">{comment.comment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentList;
