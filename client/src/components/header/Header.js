import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container-logo-title">
          <img className="header-logo" src="images/Logo.png"></img>
          <h3 className="header-title">Jack Pronske</h3>
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
