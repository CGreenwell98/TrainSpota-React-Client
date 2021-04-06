import React from "react";
import "./search.css";

const Search = ({ searchHidden, children }) => {
  return (
    <div className={`search-container ${searchHidden && "hidden"}`}>
      {children}
    </div>
  );
};

export default Search;
