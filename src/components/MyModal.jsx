import React from "react";
import Image from "./Image";
import _user from "../assets/images/_user.png";

function MyModal() {
  return (
    <div className="position-absolute rounded overflow-hidden my-5">
      <div
        className="d-flex flex-column align-items-center justify-content-center text-white"
        style={{
          width: "270px",
          height: "200px",
          backgroundImage: "linear-gradient(to bottom, #5569c5, #c34b64)",
        }}
      >
        <Image src={_user} imgWidth="75px" />
        <p>Jane</p>
        <span className="">jane@jane.com</span>
        <span className="">Last updated 3 mins ago</span>
      </div>
      <div className="bg-white">
        <ul>
          <li
            className="py-2"
            style={{ cursor: "pointer", listStyleType: "none" }}
          >
            <i className="bi bi-person-square me-2"></i> Profile
          </li>
          <li
            className="py-2"
            style={{ cursor: "pointer", listStyleType: "none" }}
          >
            <i className="bi bi-file-bar-graph-fill me-2"></i> Stats
          </li>
          <li
            className="py-2"
            style={{ cursor: "pointer", listStyleType: "none" }}
          >
            <i className="bi bi-chat-left-text-fill me-2"></i> Messages
          </li>
          <li
            className="py-2"
            style={{ cursor: "pointer", listStyleType: "none" }}
          >
            <i className="bi bi-gear-fill me-2"></i> Setting
          </li>
          <li
            className="py-2"
            style={{ cursor: "pointer", listStyleType: "none" }}
          >
            <i className="bi bi-question-circle-fill me-2"></i> Help
          </li>
          <li
            className="py-2"
            style={{ cursor: "pointer", listStyleType: "none" }}
          >
            <i className="bi bi-box-arrow-in-right me-2"></i> Signout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyModal;
