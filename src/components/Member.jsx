import React from "react";
import Image from "./Image";
import _user from "../assets/images/_user.png";

function Member() {
  return (
    <Image
      src={_user}
      imgHeight="60px"
      imgWidth="60px"
      className="rouded-circle postion-relative"
      right="100px"
    />
  );
}

export default Member;
