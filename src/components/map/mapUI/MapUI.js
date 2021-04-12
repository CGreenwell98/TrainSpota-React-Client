import React, { useState, useRef } from "react";
import SideBar from "./SideBar";
import Search from "./Search";
import SearchForm from "./SearchForm";
import SearchResultsContainer from "./SearchResultsContainer";
import FavouritesContainer from "./FavouritesContainer";

const MapUI = ({ findLocation }) => {
  const [searchHidden, setSearchHidden] = useState(true);
  const [favouritesHidden, setFavouritesHidden] = useState(true);
  const searchForm = useRef();

  return (
    <div className="map-ui">
      <SideBar
        searchForm={searchForm}
        findLocation={findLocation}
        searchHidden={searchHidden}
        setSearchHidden={setSearchHidden}
        favouritesHidden={favouritesHidden}
        setFavouritesHidden={setFavouritesHidden}
      />
      <Search searchHidden={searchHidden} setSearchHidden={setSearchHidden}>
        <SearchForm setSearchHidden={setSearchHidden} searchForm={searchForm} />
        <SearchResultsContainer />
      </Search>
      <FavouritesContainer
        favouritesHidden={favouritesHidden}
        setFavouritesHidden={setFavouritesHidden}
        setSearchHidden={setSearchHidden}
      />
    </div>
  );
};

export default MapUI;
