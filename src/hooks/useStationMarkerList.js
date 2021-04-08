import { useState } from "react";

const useStationMarkerList = () => {
  const [stationMarkerList, setStationMarkerList] = useState([]);

  const addStationMarker = (currentStation) => {
    setStationMarkerList((prevList) => {
      return [...prevList, currentStation];
    });
  };

  return [stationMarkerList, addStationMarker];
};

export default useStationMarkerList;
