import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "../../assets/icon-search.svg";
import axios from "axios";
import UserCard from "../userCard/UserCard";
import { getUser, IUser } from "../../service/users";

const Search = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [userData, setUserData] = useState<IUser | undefined>()

  const searchUser = (username: string) => {
    getUser(username).then(res => setUserData(res.data))
  };

  useEffect(() => {
    searchUser('octocat');
  }, []);

  return (
    <>
      <div className="search-wrapper">
        <img className="search-icon" src={SearchIcon} alt="search_icon" />
        <input
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Github username..."
        />
        <button>Search</button>
      </div>
      <UserCard userData={userData} />
    </>
  );
};

export default Search;
