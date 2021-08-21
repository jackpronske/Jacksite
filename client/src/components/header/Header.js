import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img className="header-logo" src="images/Logo.png"></img>
        <h3 className="header-title">Jack Pronske</h3>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
