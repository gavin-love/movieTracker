import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addLogout } from "../../Actions/index";
import "./Header.css";

export const Header = props => {
  const signoutButton = (
    <NavLink to="/" onClick={props.handleLogout}>
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
  handleLogout: () => dispatch(addLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
