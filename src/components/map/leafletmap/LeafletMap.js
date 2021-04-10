import React, { useContext, useEffect, useState, useMemo } from "react";
import { MapContainer } from "react-leaflet";
import { RailwayDataContext } from "../../../context/RailwayDataContext";
import { MapContext } from "../../../context/MapContext";
import ChangeView from "./ChangeView";
import MapLayers from "./MapLayers";
import AddMarker from "./AddMarker";
import StationMarkers from "./StationMarkers";

const LeafletMap = ({ location }) => {
  const { currentStation } = useContext(RailwayDataContext);
  const { stationMarkerList } = useContext(MapContext);
  const [viewCenter, setViewCenter] = useState(location);

  useEffect(() => {
    setViewCenter(location);
  }, [location]);

  useEffect(() => {
    setViewCenter(currentStation.coords);
  }, [currentStation]);

  const changeView = useMemo(() => <ChangeView center={viewCenter} />, [
    viewCenter,
  ]);

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
      {changeView}
      <AddMarker position={location} text={"You are here"} />
      <MapLayers activeLayers={["openStreetMap", "openRailwayMap"]} />
      <StationMarkers stationMarkerList={stationMarkerList} />
    </MapContainer>
  );
};

export default LeafletMap;
