import React from "react";
import { Marker, Popup } from "react-leaflet";

const AddMarker = ({ position }) => {
  return (
    <Marker position={position}>
      <Popup autoClose={false} className="popup" closeButton={false}>
        Hello world
      </Popup>
    </Marker>
  );
};

export default AddMarker;
