import React from "react";
import "./Header.css";
import Sun from "../../assets/icon-sun.svg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <p className="header-text">devfinder</p>
      <div className="switch">
        <p className="switch-text">LIGHT</p>
        <img className="switch-image" src={Sun} alt="light_icon" />
      </div>
    </div>
  );
};

export default Header;
