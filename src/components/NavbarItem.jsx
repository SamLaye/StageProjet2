import React from "react";
import _user from "../assets/images/_user.png";
import Button from "./Button";
import Image from "./Image";

function NavbarItem() {
  const btnTitle = <i className="bi bi-list-nested fs-3"></i>;
  return (
    <div
      style={{
        marginTop: "auto",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        // className="bg-primary"
      >
        <Button
          title={btnTitle}
          btnMargin="auto 0"
          bdrColor="#c34b64"
          bgColor="transparent"
          color="#c34b64"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "auto 0",
          width: "40%",
        }}
      >
        <i className="bi bi-bell-fill fs-4"></i>
        <Image src={_user} imgWidth="40px" />
      </div>
    </div>
  );
}

export default NavbarItem;
