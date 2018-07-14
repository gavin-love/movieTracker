import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addLogout, emptyFavorites } from "../../Actions/index";
import "./Header.css";

export const Header = props => {
  const removeInfo = () => {
    props.handleLogout();
    props.resetStoreFavorites();
  };
  const signoutButton = (
    <NavLink to="/" onClick={removeInfo}>
      Sign-Out
    </NavLink>
  );
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      {props.user.user_id ? (
        signoutButton
      ) : (
        <NavLink to="/login">Sign-In</NavLink>
      )}
    </div>
  );
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(addLogout()),
  resetStoreFavorites: () => dispatch(emptyFavorites())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
