import React from "react";
import Image from "components/Image";
import _user from "../../assets/images/_user.png";
import Button from "components/Button";

function Announcement() {
  return (
    <div className="col-12 col-md-4">
      <div className="border rounded" style={{ backgroundColor: "#fc5c7d" }}>
        <h3 className="text-uppercase fs-6 mt-2 py-1 px-4">Announcement</h3>
        <hr className="mb-0" />
        <div
          className="d-flex flex-column justify-content-between text-center align-items-center px-3"
          style={{ backgroundColor: "#fc708e", padding: "70px 0" }}
        >
          <div className="text-white">
            <Image
              src={_user}
              imgHeight="60px"
              imgWidth="60px"
              className="rouded-circle"
            />
            <span className="d-block fs-3 fw-bold">Jamy</span>
            <span className="d-block text-secondary">1 hour ago</span>
            <p className="">
              Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam
              nonummy euismod tinciduntut laoreet doloremagna
            </p>
            <Button
              title="Show"
              btnWidth="90px"
              boostrapStyle="btn mx-auto"
              bgColor="#6f86fb"
              color="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
