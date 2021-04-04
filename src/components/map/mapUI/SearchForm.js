import React from "react";

const SearchForm = ({ setSearchHidden, searchForm }) => {
  return (
    <div className="search-form">
      <form action="#">
        <input
          ref={searchForm}
          className="search-box"
          name="search"
          type="search"
          placeholder="Search for a station"
        />
      </form>
      <button
        onClick={() => setSearchHidden(true)}
        className="btn close-btn"
        for="search"
      >
        <b>
          <small>CLOSE</small>
        </b>
      </button>
    </div>
  );
};

export default SearchForm;
