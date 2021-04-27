import React, { useContext, useMemo } from "react";
import SearchResults from "./results/Results";
import { UserContext } from "../../../context/UserContext";
import "./container.css";

const FavouritesContainer = ({ containerVisible, setContainerVisible }) => {
  const { favouriteStations } = useContext(UserContext);

  const favouriteStationResults = useMemo(() => {
    return (
      <SearchResults
        resultType="favourite stations"
        stations={favouriteStations}
        setContainerVisible={setContainerVisible}
      />
    );
  }, [favouriteStations, setContainerVisible]);

  return (
    <div
      className={`container ${containerVisible !== "favourites" && "hidden"}`}
    >
      {favouriteStationResults}
    </div>
  );
};

export default FavouritesContainer;
