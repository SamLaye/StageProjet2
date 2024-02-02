import Announcement from "components/card/Announcement";
import Task from "components/card/Task";
import Tickets from "components/card/Tickets";
import React from "react";

function TeamSection() {
  return (
    <div className="row mt-3">
      <Announcement />
      <Tickets />
      <Task />
    </div>
  );
}

export default TeamSection;
