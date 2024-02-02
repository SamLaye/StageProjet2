import React from "react";
import _user from "../assets/images/_user.png";
import Image from "./Image";
import ProgressBar from "./card/ProgressBar";

function userDetail() {
  const users = [
    { img: _user, name: "Tom", date: "3 month", part: "75" },
    {
      img: _user,
      name: "Jenny",
      date: "1 year ago",
      part: "60",
    },
    {
      img: _user,
      name: "Sim",
      date: "2 hour",
      part: "50",
    },
    {
      img: _user,
      name: "Christine",
      date: "a month",
      part: "40",
    },
    {
      img: _user,
      name: "Bread",
      date: "6 months",
      part: "30",
    },
    {
      img: _user,
      name: "Dan",
      date: "2 years",
      part: "25",
    },
  ];
  console.log(users);
  return (
    <tbody>
      {users.map((user) => (
        <tr key={Math.random()} style={{ height: "71px" }}>
          <td>
            <Image src={user.img} imgWidth="35px" />
          </td>
          <td>{user.name}</td>
          <td>{user.date} ago</td>
          <td>
            <ProgressBar
              pgbWidth={`${user.part}%`}
              pgbColor="#6a82fb"
              pgbHeight="7px"
            />
          </td>
          <td>{user.part}%</td>
        </tr>
      ))}
    </tbody>
  );
}

export default userDetail;
