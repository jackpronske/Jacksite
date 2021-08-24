import React from "react";
import NavBar from "./NavBar";

const Header = ({ makeGuts }) => {
  return (
    <header>
      <div className="header">
        <div className="container-logo-title">
          <img
            onClick={makeGuts}
            className="header-logo"
            src="images/Logo.png"
          ></img>
          <h3 className="header-title">Jack Pronske</h3>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
