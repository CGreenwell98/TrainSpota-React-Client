import React, { useContext, useState } from "react";
import { RailwayDataContext } from "../../../context/RailwayDataContext";

const SearchForm = ({ setSearchHidden, searchForm }) => {
  const [text, setText] = useState("");
  const { stationSearch } = useContext(RailwayDataContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    stationSearch(text);
  };

  return (
    <div className="search-form">
      <form action="#" onSubmit={(e) => onFormSubmit(e)}>
        <input
          ref={searchForm}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="search-box"
          name="search"
          type="search"
          placeholder="Search for a station"
        />
      </form>
      <button onClick={() => setSearchHidden(true)} className="btn close-btn">
        <b>
          <small>CLOSE</small>
        </b>
      </button>
    </div>
  );
};

export default SearchForm;
