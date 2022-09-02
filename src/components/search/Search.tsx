import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "../../assets/icon-search.svg";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-wrapper">
      <img className="search-icon" src={SearchIcon} alt="search_icon" />
      <input
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Github username..."
      />
      <button>Search</button>
    </div>
  );
};

export default Search;
