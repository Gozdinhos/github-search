import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "../../assets/icon-search.svg";
import UserCard from "../userCard/UserCard";
import { getUser, IUser } from "../../service/users";

const Search = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [userData, setUserData] = useState<IUser | undefined>();

  const searchUser = async (username: string) => {
    if (!username) return;
    setUserData(undefined);
    getUser(username)
      .then((usr) => setUserData(usr))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    searchUser("octocat");
  }, []);

  return (
    <>
      <div className="search-wrapper">
        <img className="search-icon" src={SearchIcon} alt="search_icon" />
        <input
          data-testid="search-input"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Github username..."
        />
        {!userData && <p className="no-results">No results</p>}
        <button
          data-testid="search-button"
          onClick={() => searchUser(searchText)}
        >
          Search
        </button>
      </div>
      {userData && <UserCard userData={userData} />}
    </>
  );
};

export default Search;
