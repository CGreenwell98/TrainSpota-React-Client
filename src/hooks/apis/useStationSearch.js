import { useState } from "react";
import axios from "axios";

const useStationSearch = () => {
  const [searchedStations, setSearchedStations] = useState([]);

  const stationSearch = async (term) => {
    const response = await axios.get("/map/search-station", {
      params: {
        stationname: term,
      },
    });

    setSearchedStations(response.data);
  };

  return [searchedStations, stationSearch];
};

export default useStationSearch;
