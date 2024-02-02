import React from "react";
import UserStats from "components/card/UserStats";
import { BiSolidLike } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import { BiSolidMessageEdit } from "react-icons/bi";

function UserStatsSection() {
  const userStatCol = [
    {
      icone: <BiSolidLike />,
      stat: "50+ Likes",
      statLabel: "People you like",
    },
    {
      icone: <BiSolidMessageEdit />,
      stat: "10+ Reviews",
      statLabel: "New Reviews",
    },
    { icone: <IoMdShare />, stat: "30+ Shares", statLabel: "New Shares" },
  ];
  console.log(userStatCol);
  return (
    <div className="row mx-1 mt-2">
      {userStatCol.map((card) => (
        <UserStats userStatCol={card} key={Math.random()} />
      ))}
    </div>
  );
}

export default UserStatsSection;
