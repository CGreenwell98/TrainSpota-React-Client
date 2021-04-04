import React, { useState, useRef } from "react";
import SideBar from "./SideBar";
import Search from "./Search";

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
      <Search
        searchForm={searchForm}
        searchHidden={searchHidden}
        setSearchHidden={setSearchHidden}
      />
    </div>
  );
};

export default MapUI;
