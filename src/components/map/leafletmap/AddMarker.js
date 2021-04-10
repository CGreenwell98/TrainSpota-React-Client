import React, { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";

const AddMarker = ({ position, text }) => {
  const marker = useRef();

  useEffect(() => {
    marker.current.openPopup();
  }, []);

  return (
    <Marker ref={marker} position={position}>
      <Popup autoClose={false} className="popup" closeButton={false}>
        {text}
      </Popup>
    </Marker>
  );
};

export default AddMarker;
