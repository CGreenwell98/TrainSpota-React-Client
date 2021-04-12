import React, { useContext, useEffect, useState, useMemo } from "react";
import { MapContainer } from "react-leaflet";
import { RailwayDataContext } from "../../../context/RailwayDataContext";
import { MapContext } from "../../../context/MapContext";
import ChangeView from "./ChangeView";
import MapLayers from "./MapLayers";
import AddMarker from "./AddMarker";
import StationMarkers from "./StationMarkers";
import MapClick from "./MapClick";

const LeafletMap = ({ location }) => {
  const { currentStation } = useContext(RailwayDataContext);
  const { stationMarkerList, mapLayersList } = useContext(MapContext);
  const [viewCenter, setViewCenter] = useState(location);

  useEffect(() => {
    setViewCenter(location);
  }, [location]);

  useEffect(() => {
    setViewCenter(currentStation.coords);
  }, [currentStation]);

  const changeView = useMemo(() => {
    if (!currentStation.distance) return <ChangeView center={viewCenter} />;
  }, [viewCenter, currentStation]);

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
      <MapLayers activeLayers={mapLayersList} />
      <StationMarkers stationMarkerList={stationMarkerList} />
      <MapClick />
    </MapContainer>
  );
};

export default LeafletMap;
