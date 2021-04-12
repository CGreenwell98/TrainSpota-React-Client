import React, { useContext, useEffect } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";
import "./search.css";

const Search = ({ searchHidden, setSearchHidden, children }) => {
  const { currentStation } = useContext(RailwayDataContext);

  useEffect(() => {
    if (!currentStation.name) return;
    setSearchHidden(false);
  }, [currentStation, setSearchHidden]);

  return (
    <div className={`search-container ${searchHidden && "hidden"}`}>
      {children}
    </div>
  );
};

export default Search;
