import React from "react";
import "./container.css";

const MapOptionsContainer = ({ containerVisible }) => {
  return (
    <div className={`container ${containerVisible !== "mapType" && "hidden"}`}>
      <div>
        <h5>Map Type</h5>
      </div>

      <div>
        <h5>Railway Type</h5>
      </div>
    </div>
  );
};

export default MapOptionsContainer;
