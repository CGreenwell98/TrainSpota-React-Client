import { useState } from "react";

const useFavouriteStations = () => {
  const [favouriteStations, setFavouriteStations] = useState([]);

  const addFavouriteStation = (currentStation) => {
    if (
      favouriteStations.some((station) => station.name === currentStation.name)
    )
      return;
    setFavouriteStations((prevList) => {
      return [...prevList, currentStation];
    });
  };

  const removeFavouriteStation = (currentStation) => {
    if (
      !favouriteStations.some((station) => station.name === currentStation.name)
    )
      return;
    setFavouriteStations((prevList) => {
      return prevList.filter((marker) => marker.name !== currentStation.name);
    });
  };

  return [favouriteStations, addFavouriteStation, removeFavouriteStation];
};

export default useFavouriteStations;
