import "./Button.css";

function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      className={`button button-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;