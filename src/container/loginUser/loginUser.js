import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, getFavorites } from "../../utilities/apiCalls/apiCalls.js";
import {
  updateUser,
  addError,
  addAllFavorites,
  resolveError
} from "../../Actions/index.js";
import PropTypes from 'prop-types'

export class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const userData = await getUser(this.state);
      this.props.handleLogin(userData.data);
      this.props.clearError();
      this.loadFavorites(userData.data);
    } catch (error) {
      this.props.handleError("Email or Password do not match");
    }
  };

  loadFavorites = async user => {
    try {
      const favorites = await getFavorites(user.id);
      this.props.addUserFavorites(favorites.data);
    } catch (error) {}
  };

  render() {
    return (
      <form className="log_in" onSubmit={this.handleSubmit}>
        <h5 className="login_title">Account Login</h5>

        <input
          className="login_user"
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input
          className="login_user"
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button className="login_button">Submit</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleLogin: user => dispatch(updateUser(user)),
  handleError: error => dispatch(addError(error)),
  addUserFavorites: favorites => dispatch(addAllFavorites(favorites)),
  clearError: () => dispatch(resolveError())
});

export default connect(
  null,
  mapDispatchToProps
)(LoginUser);


LoginUser.propTypes = {
  handleLogin: PropTypes.func,
  handleError: PropTypes.func,
  clearError: PropTypes.func,
  addUserFavorites:PropTypes.func
}