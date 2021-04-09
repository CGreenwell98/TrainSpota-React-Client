import { useState } from "react";

const useStationMarkerList = () => {
  const [stationMarkerList, setStationMarkerList] = useState([]);

  const addStationMarker = (currentStation) => {
    if (
      stationMarkerList.some((station) => station.name === currentStation.name)
    )
      return;
    setStationMarkerList((prevList) => {
      return [...prevList, currentStation];
    });
  };

  const removeStationMarker = (currentStation) => {
    if (
      !stationMarkerList.some((station) => station.name === currentStation.name)
    )
      return;
    setStationMarkerList((prevList) => {
      return prevList.filter((marker) => marker.name !== currentStation.name);
    });
  };

  return [stationMarkerList, addStationMarker, removeStationMarker];
};

export default useStationMarkerList;
