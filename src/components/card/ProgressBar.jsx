import React from "react";

function ProgressBar({ pgbWidth, pgbColor, pgbHeight }) {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Info example"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ height: pgbHeight, margin: "auto 0" }}
    >
      <div
        className="progress-bar"
        style={{ width: pgbWidth, backgroundColor: pgbColor }}
      ></div>
    </div>
  );
}

export default ProgressBar;
