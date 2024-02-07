import React, { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import useWindowDimensions from "../hooks/useWindowsDimention";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const NavbarPaner = styled.div`
  background-color: #fff;
  flex: 1;
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  height: 70px;
  transition: padding 0.3s;
  z-index: 2;
  padding: ${({ openedMenu, minViewPort }) =>
  openedMenu ?
    "0px 0px 0 5px" :
    minViewPort ?
      "0px 0px 0 60px" :
      "0px 0px 0 250px"};
`;
const BodyContainer = styled.div`
  display: flex;
`;
const SidebarPaner = styled.div`
  width: ${({ openedMenu }) => (!openedMenu ? "250px" : "0")};
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0%;
  background-color: #fff;
  transition: width 0.3s;
  z-index: 4;
`;
const MenuController = styled.div`
  position: absolute;
  top: 15px;
  // left: 30px;
  width: 60px;
  height: 40px;
  background-color: #fff;
  // border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fc5c7d;
  cursor: pointer;
  z-index: 3;
`;
const ContaintOutlet = styled.div`
  width: 100%;
  height: 100vh;
  // background-color: red;
  background-color: rgba(241, 241, 241, 0.624);
  transition: padding 0.3s;
  overflow-x: hidden;
  z-index: 1;
  padding: ${({ openedMenu, minViewPort }) =>
  openedMenu ?
    "70px 10px 0 10px" :
    minViewPort ?
      "70px 10px 0 70px" :
      "70px 10px 0 260px"};
`;
const SpliTemplateScreen = ({ children }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [minViewPort, setMinViewPort] = useState(false);

  const [navbar, sidebar, outlet] = children;

  const sidebarRef = useRef(null);

  const { width } = useWindowDimensions();
  const handleResize = () => {
    setOpenedMenu((v) => !v);
  };

  useMemo(() => {
    if (width <= 900) {
      setMinViewPort(true);
      setOpenedMenu(true);
    } else {
      setMinViewPort(false);
      setOpenedMenu(false);
    }
  }, [width]);

  return (
    <Container>
      <NavbarPaner openedMenu={openedMenu} minViewPort={minViewPort}>
        <MenuController onClick={handleResize}
        className="ms-4 fs-3"
        style={{ color: "#fc5c7d", borderRadius: "5px" }}>
            {openedMenu ? (
              <AiOutlineMenuUnfold className="menu-controller-icon" />
            ) : (
              <AiOutlineMenuFold className="menu-controller-icon" />
            )}
        </MenuController>
        {navbar}
      </NavbarPaner>
      <BodyContainer>
        <SidebarPaner openedMenu={openedMenu} ref={sidebarRef} style={{ overflow: "hidden" }}>
          <MenuController onClick={handleResize} id="menuControllerInSidebar"
          style={{ marginLeft: "180px", top: "27px", backgroundColor: "transparent", color: "#fff", width: "55px", height: "35px" }}>
              <AiOutlineMenuFold className="menu-controller-icon" />
        </MenuController>
          {sidebar}
        </SidebarPaner>
        <ContaintOutlet openedMenu={openedMenu} minViewPort={minViewPort}>
          {outlet}
        </ContaintOutlet>
      </BodyContainer>
    </Container>
  );
};

export default SpliTemplateScreen;