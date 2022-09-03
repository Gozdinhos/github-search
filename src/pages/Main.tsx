import React from "react";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Search />
    </div>
  );
};

export default Main;
