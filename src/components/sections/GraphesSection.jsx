import React from "react";
import Graphe from "components/card/Graphe";

function GraphesSection() {
  return (
    <div className="row">
      <div className="col-12 col-md-4 p-2">
        <div className="border bg-white">
          <Graphe />
        </div>
      </div>
      <div className="col-12 col-md-4 p-2">
        <div className="border bg-white">
          <Graphe />
        </div>
      </div>
      <div className="col-12 col-md-4 p-2">
        <div className="border bg-white">
          <Graphe />
        </div>
      </div>
    </div>
  );
}

export default GraphesSection;
