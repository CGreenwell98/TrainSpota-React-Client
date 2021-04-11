import { useContext } from "react";
import { useMapEvent } from "react-leaflet";
import { RailwayDataContext } from "../../../context/RailwayDataContext";

const MapClick = () => {
  const {
    findClosestStation,
    getStationTrainData,
    setCurrentStation,
  } = useContext(RailwayDataContext);

  const map = useMapEvent("click", async (e) => {
    const closestStation = await findClosestStation(e.latlng);
    setCurrentStation(closestStation);
    getStationTrainData(closestStation.code);
  });
  return null;
};

export default MapClick;
