import React, { cloneElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarItem from "../../components/SidebarItem";
import ResourceDataMap from "../../components/ResourceDataMap";
import { links } from "routes/navigation/sidebarLinks";
import Image from "components/Image";
import logo from "../../assets/images/logo.png";

const SidebarComponent = ({
  bgColor,
  bgImage,
  activeLinkColor,
  activeLinkBgColor,
  linkBgColorOnHover,
  colorOnHover,
  linkColor,
}) => {
  const ClonedSidebarItem = ({ linkItem }) =>
    cloneElement(<SidebarItem linkItem={linkItem} />, {
      activeLinkColor,
      activeLinkBgColor,
      linkBgColorOnHover,
      colorOnHover,
      linkColor,
    });
  return (
    <div
      style={{
        backgroundImage: bgImage ? bgImage : "none",
        backgroundColor: bgColor ? bgColor : "#fff",
        height: "100%",
        padding: "25px 10px",
        borderRight: "1px solid rgba(0,0,0,0.1)",
        textTransform: "uppercase",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "50px",
        }}
      >
        <Image src={logo} imgWidth="40px" />
        <span
          style={{
            margin: "auto 2px",
            color: "#fff",
            marginLeft: "10px",
            fontWeight: "300",
            fontSize: "23px",
            textTransform: "capitalize",
          }}
        >
          Reduction
        </span>
      </div>
      <ResourceDataMap
        resourceData={links}
        resourceItem={ClonedSidebarItem}
        resourceName="linkItem"
      />
    </div>
  );
};

export default SidebarComponent;
