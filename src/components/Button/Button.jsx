import "./Button.scss";

function Button({ children }) {
  return (
    <div className="button">
      <button className="button__btn" type="button">
        {children}
      </button>
    </div>
  );
}

export default Button;
