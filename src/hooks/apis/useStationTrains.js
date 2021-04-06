import { useState } from "react";
import axios from "axios";

const useStationTrains = () => {
  const [stationTrainData, setStationTrainData] = useState([]);

  const getStationTrainData = async (stationcode, type = "stopping") => {
    const response = await axios.get("/map/station-trains", {
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
