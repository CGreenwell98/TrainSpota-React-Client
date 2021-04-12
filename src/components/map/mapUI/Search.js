import React, { useContext, useEffect } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";
import "./search.css";

const Search = ({ containerVisible, setContainerVisible, children }) => {
  const { currentStation } = useContext(RailwayDataContext);

  useEffect(() => {
    if (!currentStation.name) return;
    setContainerVisible("search");
  }, [currentStation, setContainerVisible]);

  return (
    <div
      className={`search-container ${
        containerVisible !== "search" && "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default Search;
