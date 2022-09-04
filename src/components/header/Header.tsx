import React, { useEffect, useState } from "react";
import "./Header.css";
import Sun from "../../assets/icon-sun.svg";
import Moon from "../../assets/icon-moon.svg";
import { getDefaultTheme } from "../../utils";

type Theme = "dark" | "light";

const Header = () => {
  const [theme, setTheme] = useState<Theme>(getDefaultTheme());

  const toggleMode = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("github-search-theme", theme);
  }, [theme]);

  return (
    <div className="header-wrapper">
      <p data-testid="header-text" className="header-text">
        devfinder
      </p>
      <div
        data-testid="switch-component"
        onClick={toggleMode}
        className="switch"
      >
        {theme === "dark" ? (
          <>
            <p>LIGHT</p>
            <img className="switch-image" src={Sun} alt="light_icon" />
          </>
        ) : (
          <>
            <p className="dark-text">DARK</p>
            <img className="switch-image" src={Moon} alt="moon_icon" />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
