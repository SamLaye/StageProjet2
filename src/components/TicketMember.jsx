import React from "react";
import _user from "../assets/images/_user.png";
import Image from "./Image";

function TicketMember() {
  const TicketMember = [
    { name: "Sim", date: "30 mins ago", statu: "pending" },
    { name: "Jane", date: "1 hour ago", statu: "open" },
    { name: "Tom", date: "yesterday", statu: "closed" },
  ];
  return (
    <>
      {TicketMember.map((member) => (
        <div
          className="col-11 d-flex flex-column  mx-auto d-flex justify-content-between ps-3 p-2"
          key={Math.random()}
        >
          <div className="d-flex w-100">
            <div className="d-flex ">
              <Image src={_user} imgWidth="60px" imgHeight="60px" />
              <div className="d-flex flex-column ms-2">
                <span className="fs-6">{member.name}</span>
                <span className="text-secondary">{member.date}</span>
              </div>
            </div>
            <a
              href="#"
              className="text-capitalize my-auto text-end ms-5"
              style={{ color: "green", textDecoration: "none" }}
            >
              {" "}
              <p className="text-capitalize my-auto text-end">{member.statu}</p>
            </a>
          </div>
          <div>
            <p className="text-secondary" style={{ fontSize: "18px" }}>
              Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam
              nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat
              volutpat.
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TicketMember;
