import React, { createContext } from "react";
import useFavouriteStations from "../hooks/useFavouriteStations";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [
    favouriteStations,
    addFavouriteStation,
    removeFavouriteStation,
  ] = useFavouriteStations();

  return (
    <UserContext.Provider
      value={{ favouriteStations, addFavouriteStation, removeFavouriteStation }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
