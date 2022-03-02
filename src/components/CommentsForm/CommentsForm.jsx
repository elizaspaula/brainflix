import Avatar from "../Avatar/Avatar";
import "./CommentsForm.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import Button from "../Button/Button";

function CommentsForm() {
  return (
    <form className="conversations">
      <div className="conversations__avatar">
        <Avatar />
      </div>

      <div className="conversations__group">
        <p className="conversations__label" htmlFor="message">
          Join the Conversation
        </p>
        <div className="conversations__wrapper">
          <textarea
            id="message"
            name="comment"
            placeholder="Add a new comment"
            cols="30"
            rows="5"
            className="conversations__message"
            autoFocus
            required="required"
          ></textarea>
          <div className="conversations__btn">
            <Button>
              <img
                className="conversations__icon"
                src={commentIcon}
                alt="upload icon"
              />
              <p className="conversations__content">comment</p>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CommentsForm;
