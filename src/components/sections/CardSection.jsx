import Card from "components/card/Card";
import React from "react";

function CardSection() {
  const cardCol = [
    { cardLabel: "Total Profit", stat: "9.8k", score: "75%" },
    { cardLabel: "Monthly Visitors", stat: "5,400", score: "45%" },
    { cardLabel: "New Users", stat: "3,400", score: "90%" },
    { cardLabel: "Bounce Rate", stat: "38%", score: "60%" },
  ];
  return (
    <div className="row">
      {cardCol.map((card) => (
        <Card cardCol={card} key={Math.random()} />
      ))}
    </div>
  );
}

export default CardSection;
