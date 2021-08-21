import React from "react";

const NavBar = () => {
  const navItems = ["about", "skills", "portfolio", "contact"];
  return (
    <div className="nav-bar">
      {navItems.map((navItem, i) => {
        return (
          <div className="nav-item" key={i}>
            {navItem}
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
