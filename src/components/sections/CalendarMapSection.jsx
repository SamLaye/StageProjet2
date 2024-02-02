import React from "react";
import Map from "components/card/Map";
import Calendar from "components/card/Calendar";

function CalendarMapSection() {
  return (
    <div className="row">
      <div className="col-12 col-md-4 pe-1">
        <div className="border">
          <Calendar />
        </div>
      </div>
      <div className="col-12 col-md-8 pe-1">
        <div className="border">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default CalendarMapSection;
