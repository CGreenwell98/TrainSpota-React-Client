import { useContext, useState } from "react";
import { useMapEvent } from "react-leaflet";
import { RailwayDataContext } from "../../../context/RailwayDataContext";

const MapClick = () => {
  const {
    findClosestStation,
    getStationTrainData,
    setCurrentStation,
  } = useContext(RailwayDataContext);
  const [clickedTimeStamp, setClickedTimeStamp] = useState(0);

  useMapEvent("click", async (e) => {
    const clickTimeInterval = e.originalEvent.timeStamp - clickedTimeStamp;
    if (clickTimeInterval < 1000) return;
    setClickedTimeStamp(e.originalEvent.timeStamp);

    const closestStation = await findClosestStation(e.latlng);
    if (!closestStation) return;
    setCurrentStation(closestStation);
    getStationTrainData(closestStation.code);
  });
  return null;
};

export default MapClick;
