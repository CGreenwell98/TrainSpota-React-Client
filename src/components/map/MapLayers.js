import React from "react";
import { TileLayer } from "react-leaflet";

const layerList = {
  satelitte: {
    url:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    zIndex: 0,
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  },
  openStreetMap: {
    url: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    zIndex: 0,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  openRailwayMap: {
    url: "https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
    zIndex: 2,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
};

const MapLayers = ({ activeLayers }) => {
  const renderedLayers = activeLayers.map((layerName) => {
    const { url, attribution, zIndex } = layerList[layerName];
    return <TileLayer url={url} attribution={attribution} zIndex={zIndex} />;
  });

  return <div>{renderedLayers}</div>;
};

export default MapLayers;
