import "./ProgressBar.css";

function ProgressBar({ value = 0 }) {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="progress-value"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default ProgressBar;