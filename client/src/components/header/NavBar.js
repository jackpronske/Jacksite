import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const navItems = ["about", "skills", "portfolio", "contact"];
  return (
    <div className="nav-bar">
      {navItems.map((navItem, i) => {
        return <NavBarItem navItem={navItem} key={i} />;
      })}
    </div>
  );
};

export default NavBar;
