import Avatar from "../Avatar/Avatar";
import "./CommentsForm.scss";
import commentIcon from "../../assets/icons/add_comment.svg";

function CommentsForm() {
  return (
    <form className="conversations">
      <div className="conversations__avatar">
        <Avatar />
      </div>

      <div className="conversations__group">
        <label className="conversations__label label" for="message">
          Join the Conversation
        </label>
        <textarea
          id="message"
          name="comment"
          placeholder="Add a new comment"
          cols="50"
          rows="5"
          className="conversations__message"
          autofocus
          required="required"
        ></textarea>
        <div className="conversations__btn">
          <button
            className="conversations__button btn"
            value="submit"
            type="submit"
            src={commentIcon}
          >
            Comment
          </button>
        </div>
      </div>
    </form>
  );
}

export default CommentsForm;
