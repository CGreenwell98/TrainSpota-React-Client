import axios from "axios";

const useStationLocate = () => {
  const findClosestStation = async ({ lat, lng }) => {
    const station = await axios.get("/map/closest-station", {
      params: {
        lat: lat,
        lng: lng,
      },
    });
    if (station.data.distance > 400) return;
    return station.data;
  };

  return [findClosestStation];
};

export default useStationLocate;
