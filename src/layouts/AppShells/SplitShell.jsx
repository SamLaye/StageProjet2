import SpliTemplateScreen from "layouts";
import NavbarComponent from "layouts/navbar/NavbarComponent";
import SidebarComponent from "layouts/sidebar/SidebarComponent";
import React from "react";
import { Outlet } from "react-router-dom";

/*
|--------------------------------------------------------------------------
| Dashboard avec un sidebar
|--------------------------------------------------------------------------
|
| Ce layout contient le sidebar ainsi que le navbar de l'application
| Il est appeler dans routes/navigation/privte.js en tant que children de RequireAuth
|
*/
const SplitShell = () => {
  return (
    <SpliTemplateScreen>
      <NavbarComponent />
      <SidebarComponent
        bgColor={"#5569c5"}
        bgImage={"linear-gradient(to bottom, #5569c5, #c34b64)"}
        activeLinkColor={"#fff"}
        activeLinkBgColor="rgba(255, 255, 255, 0.3)"
        linkBgColorOnHover="rgba(255, 255, 255, 0.2)"
        linkColor="#fff"
        colorOnHover={"#fff"}
      />
      <Outlet />
    </SpliTemplateScreen>
  );
};

export default SplitShell;
