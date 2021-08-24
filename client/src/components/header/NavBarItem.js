import React from "react";

const NavBarItem = ({ navItem }) => {
  return (
    <a href={`#${navItem}`} className="nav-item">
      {navItem}
    </a>
  );
};

export default NavBarItem;
