import React from "react";
import _user from "../assets/images/_user.png";
import Image from "./Image";

function NavbarItem() {
  // const btnTitle = <i className="bi bi-list-nested fs-3"></i>;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // marginLeft: "40px !important",
        }}
        className="ms-5"
      >
        <div className="input-group ms-5" style={{ border: "1px solid #ddd" }}>
          <i
            className="bi bi-search px-2 my-auto"
            style={{ color: "#fc5c7d", cursor: "pointer" }}
          ></i>
          <input
            type="text"
            className="form-control border-0 shadow-none"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "auto 0",
          width: "40%",
        }}
      >
        <i
          className="bi bi-bell-fill fs-5 my-auto"
          style={{ color: "#fc5c7d", cursor: "pointer" }}
        ></i>
        <Image src={_user} imgWidth="40px" className={"ms-3"} />
      </div>
    </div>
  );
}

export default NavbarItem;
