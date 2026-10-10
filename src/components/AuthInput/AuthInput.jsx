import "./AuthInput.css";

function AuthInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
}) {
  return (
    <div className="auth-input">
      <label htmlFor={id} className="auth-input__label">
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`auth-input__field ${
          error ? "auth-input__field--error" : ""
        }`}
      />

      {error && (
        <span className="auth-input__error">
          {error}
        </span>
      )}
    </div>
  );
}

export default AuthInput;