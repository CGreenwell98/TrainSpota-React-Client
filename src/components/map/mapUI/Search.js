import React from "react";
import SearchForm from "./SearchForm";
import "./search.css";

const Search = ({ searchHidden, setSearchHidden, searchForm }) => {
  return (
    <div className={`search-container ${searchHidden ? "hidden" : ""}`}>
      <SearchForm setSearchHidden={setSearchHidden} searchForm={searchForm} />
      <div className="search-result-container">
        <div className="train-btn-box"></div>
        <div className="search-results"></div>
        <div className="loading-dots loading-dots-hidden">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
