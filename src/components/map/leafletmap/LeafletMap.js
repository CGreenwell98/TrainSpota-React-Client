import React, { useContext, useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";
import { RailwayDataContext } from "../../../context/RailwayDataContext";
import ChangeView from "./ChangeView";
import MapLayers from "./MapLayers";
import AddMarker from "./AddMarker";
import StationMarkers from "./StationMarkers";

const LeafletMap = ({ location }) => {
  const { currentStation } = useContext(RailwayDataContext);
  const [viewCenter, setViewCenter] = useState(location);

  useEffect(() => {
    setViewCenter(location);
  }, [location]);

  useEffect(() => {
    setViewCenter(currentStation.coords);
  }, [currentStation]);

  return (
    <MapContainer
      center={location}
      zoom={12}
      maxZoom={18}
      minZoom={6}
      zoomControl={false}
      maxBounds={[
        [59, -12],
        [50, 3],
      ]}
    >
      <ChangeView center={viewCenter} />
      <AddMarker position={location} text={"You are here"} />
      <MapLayers activeLayers={["openStreetMap", "openRailwayMap"]} />
      <StationMarkers />
    </MapContainer>
  );
};

export default LeafletMap;
