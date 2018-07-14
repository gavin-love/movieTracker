import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </div>
  );
};
