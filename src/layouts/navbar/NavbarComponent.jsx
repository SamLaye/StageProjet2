import NavbarItem from "components/NavbarItem";
import React from "react";

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 20px",
        height: "100%",
        backgroundColor: bgColor ? bgColor : "#fff",
        // borderBottom: "1px solid rgba(0,0,0,0.1)",
        ...navbarContainerStyles,
      }}
    >
      <NavbarItem />
    </div>
  );
}

export default NavbarComponent;
