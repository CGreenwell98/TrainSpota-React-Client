import React from "react";
import useLocation from "../../hooks/useLocation";
import { RailwayDataProvider } from "../../context/RailwayDataContext";
import { MapContextProvider } from "../../context/MapContext";
import { UserContextProvider } from "../../context/UserContext";
import LeafletMap from "./leafletmap/LeafletMap";
import MapUI from "./mapUI/MapUI";
import "./map.css";

const MapComponent = () => {
  const [location, findLocation] = useLocation();

  return (
    <RailwayDataProvider>
      <UserContextProvider>
        <MapContextProvider>
          <div className="map-container">
            <MapUI findLocation={findLocation} />
            <LeafletMap location={location} />
          </div>
        </MapContextProvider>
      </UserContextProvider>
    </RailwayDataProvider>
  );
};

export default MapComponent;
