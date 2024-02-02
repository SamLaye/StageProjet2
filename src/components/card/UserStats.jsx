import React from "react";

function UserStats({ userStatCol }) {
  return (
    <div className="col-4 d-flex flex-row border bg-white p-3">
      <div
        className="d-flex align-self-center me-5"
        style={{ fontSize: "55px" }}
      >
        {userStatCol.icone}
      </div>
      <div
        className="d-flex flex-column justify-content-center"
        style={{ fontSize: "20px" }}
      >
        <p>{userStatCol.stat}</p>
        <p>{userStatCol.statLabel}</p>
      </div>
    </div>
  );
}

export default UserStats;
