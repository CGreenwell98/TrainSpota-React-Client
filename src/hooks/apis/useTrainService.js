import { useState } from "react";
import axios from "axios";

const useTrainService = () => {
  const [trainServiceData, setTrainServiceData] = useState([]);

  const getTrainServiceData = async (trainId) => {
    const response = await axios.get("/map/train-service", {
      params: {
        trainId,
      },
    });

    setTrainServiceData(response.data);
  };

  return [trainServiceData, getTrainServiceData];
};

export default useTrainService;
