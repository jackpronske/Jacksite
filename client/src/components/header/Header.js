import React from "react";
import NavBar from "./NavBar";

const Header = ({ makeGuts, guts }) => {
  const currentLogo = guts ? "images/Brand.png" : "images/Logo.png";
  return (
    <header>
      <div className="header">
        <div className="container-logo-title">
          <img
            onClick={makeGuts}
            className="header-logo"
            src={currentLogo}
          ></img>
          <h3 className="header-title">Jack Pronske</h3>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
