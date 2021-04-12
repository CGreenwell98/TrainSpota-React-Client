import React, { useState, useRef } from "react";
import SideBar from "./SideBar";
import Search from "./Search";
import SearchForm from "./SearchForm";
import SearchResultsContainer from "./SearchResultsContainer";
import FavouritesContainer from "./FavouritesContainer";
import MapOptionsContainer from "./MapOptionsContainer";

const MapUI = ({ findLocation }) => {
  const [containerVisible, setContainerVisible] = useState("");
  const searchForm = useRef();

  return (
    <div className="map-ui">
      <SideBar
        searchForm={searchForm}
        findLocation={findLocation}
        containerVisible={containerVisible}
        setContainerVisible={setContainerVisible}
      />
      <Search
        containerVisible={containerVisible}
        setContainerVisible={setContainerVisible}
      >
        <SearchForm
          setContainerVisible={setContainerVisible}
          searchForm={searchForm}
        />
        <SearchResultsContainer />
      </Search>
      <MapOptionsContainer containerVisible={containerVisible} />;
      <FavouritesContainer
        containerVisible={containerVisible}
        setContainerVisible={setContainerVisible}
      />
    </div>
  );
};

export default MapUI;
