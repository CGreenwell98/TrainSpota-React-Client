import React, { useContext } from "react";
import { MapContext } from "../../../context/MapContext";
import MapOptionBtn from "./MapOptionBtn";
import "./container.css";

const MapOptionsContainer = ({ containerVisible }) => {
  const { mapLayersActive, setMapLayersActive } = useContext(MapContext);

  return (
    <div className={`container ${containerVisible !== "mapType" && "hidden"}`}>
      <h2>Map Layers</h2>
      <div className="map-type-box">
        <small>Map Type</small>
        <MapOptionBtn
          mapLayer="openStreetMap"
          text="Street Map"
          layerType="map"
          mapLayersActive={mapLayersActive}
          setMapLayersActive={setMapLayersActive}
        />
        <MapOptionBtn
          mapLayer="satelitte"
          text="Satelitte"
          layerType="map"
          mapLayersActive={mapLayersActive}
          setMapLayersActive={setMapLayersActive}
        />
      </div>

      <div className="map-type-box">
        <small>Railway Type</small>
        <MapOptionBtn
          mapLayer="railwayOperator"
          text="Railway Operator"
          layerType="railway"
          mapLayersActive={mapLayersActive}
          setMapLayersActive={setMapLayersActive}
        />
        <MapOptionBtn
          mapLayer="railwaySpeed"
          text="Railway Speed"
          layerType="railway"
          mapLayersActive={mapLayersActive}
          setMapLayersActive={setMapLayersActive}
        />
      </div>
    </div>
  );
};

export default MapOptionsContainer;
