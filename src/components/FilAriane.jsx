import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function FilAriane() {
  return (
    <div className="d-flex ">
      <h1 style={{ margin: "10px 0", fontSize: "50px" }} id="filArianeT1">
        Dashbord
      </h1>
      <h1
        className="fs-4 my-auto py-2 px-2 ms-2 rounded"
        style={{ backgroundColor: "#e9ecef" }}
        id="filArianeT2"
      >
        <span>Home</span> / <span>Dashbord</span>
      </h1>
    </div>
  );
}

export default FilAriane;
