import { useState } from "react";
import axios from "axios";

const useStationTrains = () => {
  const [stationTrainData, setStationTrainData] = useState([]);

  const getStationTrainData = async (stationcode, type) => {
    const response = await axios.get("/map/search-traims", {
      params: {
        stationcode: stationcode,
        type: type,
      },
    });

    setStationTrainData(response.data);
  };

  return [stationTrainData, getStationTrainData];
};

export default useStationTrains;
