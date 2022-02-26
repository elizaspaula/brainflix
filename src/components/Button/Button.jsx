import "./Button.scss";

function Button({ children }) {
  return (
    <button className="button__btn" type="button">
      {children}
    </button>
  );
}

export default Button;
