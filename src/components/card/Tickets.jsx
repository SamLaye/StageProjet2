import Button from "components/Button";
import TicketMember from "components/TicketMember";
import React from "react";

function Tickets() {
  return (
    <div className="col-12 col-md-4">
      <div className="border rounded bg-white">
        <div className="d-flex justify-content-between pe-3">
          <h3 className="text-uppercase fs-6 mt-2 py-1 px-4">
            support Tickets{" "}
          </h3>
          <Button
            title="view all"
            btnWidth="90px"
            boostrapStyle="mb-0 my-auto "
            bgColor="#fc5c7d"
            color="#fff"
          />
        </div>
        <hr className="mb-0" />
        <div className="row">
          <TicketMember />
        </div>
      </div>
    </div>
  );
}

export default Tickets;
