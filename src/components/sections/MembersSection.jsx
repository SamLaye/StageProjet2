import Members from "components/card/Members";
import React from "react";

function MembersSection() {
  return (
    <div className="row mt-3">
      <div className="col-12 col-md-6 pe-2">
        <div className="bg-white d-flex justify-content-center py-3 px-2">
          <Members />
        </div>
      </div>
      <div className="col-12 col-md-6 ps-2">
        <div className="bg-white d-flex justify-content-center py-3 px-2">
          <Members />
        </div>
      </div>
    </div>
  );
}

export default MembersSection;
