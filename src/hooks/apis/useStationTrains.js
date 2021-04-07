import { useState } from "react";
import axios from "axios";

const useStationTrains = () => {
  const [stationTrainData, setStationTrainData] = useState([]);

  const getStationTrainData = async (stationCode, type = "stopping") => {
    const response = await axios.get("/map/station-trains", {
      params: {
        stationcode: stationCode,
        type: type,
      },
    });

    setStationTrainData(response.data);
  };

  return [stationTrainData, getStationTrainData];
};

export default useStationTrains;
