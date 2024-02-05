import React from "react";

function Card({ cardCol }) {
  console.log(cardCol);

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-2">
      <div className="border bg-white p-4">
        <div className="d-flex justify-content-between">
          <h3
            style={{ fontSize: "18px", fontWeight: "bold" }}
            className="card_CardLabel"
          >
            {cardCol.cardLabel}
          </h3>
          <p style={{ color: "#fc5c7d", fontSize: "18px" }}>{cardCol.stat}</p>
        </div>
        <div className="">
          <span className="text-secondary" style={{ fontSize: "15px" }}>
            This month
          </span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Info example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "10px" }}
          >
            <div
              className="progress-bar"
              style={{ width: cardCol.score, backgroundColor: "#fc5c7d" }}
            ></div>
          </div>
          <span className="d-flex justify-content-between text-secondary">
            <span className="" style={{ fontSize: "15px" }}>
              Last month
            </span>
            <span>{cardCol.score}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
