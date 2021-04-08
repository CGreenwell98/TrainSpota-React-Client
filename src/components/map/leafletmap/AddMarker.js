import React from "react";
import { Marker, Popup } from "react-leaflet";

const AddMarker = ({ position, text }) => {
  return (
    <Marker position={position}>
      <Popup autoClose={false} className="popup" closeButton={false}>
        {text}
      </Popup>
    </Marker>
  );
};

export default AddMarker;
