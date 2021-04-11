import React, { useContext, useMemo } from "react";
import SearchResults from "./SearchResults";
import { UserContext } from "../../../context/UserContext";
import "./favouritesContainer.css";

const FavouritesContainer = ({
  favouritesHidden,
  setSearchHidden,
  setFavouritesHidden,
}) => {
  const { favouriteStations } = useContext(UserContext);

  const favouriteStationResults = useMemo(() => {
    return (
      <SearchResults
        resultType="favourite stations"
        stations={favouriteStations}
        setFavouritesHidden={setFavouritesHidden}
        setSearchHidden={setSearchHidden}
      />
    );
  }, [favouriteStations, setSearchHidden, setFavouritesHidden]);

  return (
    <div className={`favourites-container ${favouritesHidden && "hidden"}`}>
      {favouriteStationResults}
    </div>
  );
};

export default FavouritesContainer;
