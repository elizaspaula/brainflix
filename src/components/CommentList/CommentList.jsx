import "./CommentList.scss";

function CommentList() {
  return (
    <ul className="comments__list">
      <li className="comments__item">
        <div className="comments__content">
          <div className="comments__avatar">
            <div className="avatar"></div>
          </div>
          <div className="comments__info">
            <div className="comments__info_wrapper">
              <p className="comments__info__name">Michael</p>
              <p className="comments__info__date">08/09/2021</p>
            </div>
            <p className="comments__info__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              voluptatum praesentium a molestiae dolorum expedita rem, natus
              molestias et beatae consectetur consequatur recusandae quibusdam
              odit. Cumque magni dolor consectetur deleniti?
            </p>
          </div>
        </div>
      </li>
      <li className="comments__item">
        <div className="comments__content">
          <div className="comments__avatar">
            <div className="avatar"></div>
          </div>
          <div className="comments__info">
            <div className="comments__info_wrapper">
              <p className="comments__info__name">Michael</p>
              <p className="comments__info__date">08/09/2021</p>
            </div>
            <p className="comments__info__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              voluptatum praesentium a molestiae dolorum expedita rem, natus
              molestias et beatae consectetur consequatur recusandae quibusdam
              odit. Cumque magni dolor consectetur deleniti?
            </p>
          </div>
        </div>
      </li>
      <li className="comments__item">
        <div className="comments__content">
          <div className="comments__avatar">
            <div className="avatar"></div>
          </div>
          <div className="comments__info">
            <div className="comments__info_wrapper">
              <p className="comments__info__name">Michael</p>
              <p className="comments__info__date">08/09/2021</p>
            </div>
            <p className="comments__info__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              voluptatum praesentium a molestiae dolorum expedita rem, natus
              molestias et beatae consectetur consequatur recusandae quibusdam
              odit. Cumque magni dolor consectetur deleniti?
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
