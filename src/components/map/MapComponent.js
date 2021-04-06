import React, { useState } from "react";
import { MapContainer } from "react-leaflet";
import useLocation from "../../hooks/useLocation";
import { RailwayDataProvider } from "../../context/RailwayDataContext";
import ChangeView from "./ChangeView";
import MapLayers from "./MapLayers";
import AddMarker from "./AddMarker";
import MapUI from "./mapUI/MapUI";
import "./map.css";

const MapComponent = () => {
  const [location, findLocation] = useLocation();
  // const [markerList, setMarkerList] = useState([]);

  return (
    <RailwayDataProvider>
      <div className="map-container">
        <MapUI findLocation={findLocation} />
        <MapContainer
          center={location}
          zoom={11}
          maxZoom={18}
          minZoom={6}
          zoomControl={false}
          maxBounds={[
            [59, -12],
            [50, 3],
          ]}
        >
          <ChangeView center={location} zoom={13} />
          <AddMarker position={location} />
          <MapLayers activeLayers={["openStreetMap", "openRailwayMap"]} />
        </MapContainer>
      </div>
    </RailwayDataProvider>
  );
};

export default MapComponent;
