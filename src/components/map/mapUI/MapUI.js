import React, { useState, useRef } from "react";
import SideBar from "./SideBar";
import Search from "./Search";
import SearchForm from "./SearchForm";
import SearchResultsContainer from "./SearchResultsContainer";

const MapUI = ({ findLocation }) => {
  const [searchHidden, setSearchHidden] = useState(true);
  const searchForm = useRef();

  return (
    <div className="map-ui">
      <SideBar
        searchForm={searchForm}
        findLocation={findLocation}
        setSearchHidden={setSearchHidden}
      />
      <Search searchHidden={searchHidden}>
        <SearchForm setSearchHidden={setSearchHidden} searchForm={searchForm} />
        <SearchResultsContainer />
      </Search>
    </div>
  );
};

export default MapUI;
