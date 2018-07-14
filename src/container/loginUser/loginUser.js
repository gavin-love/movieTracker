import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, getFavorites } from "../../utilities/apiCalls/apiCalls.js";
import {
  updateUser,
  addError,
  addAllFavorites,
  resolveError
} from "../../Actions/index.js";

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
      this.loadFavorites(userData.data);
      this.props.clearError();
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLogin: user => dispatch(updateUser(user)),
  handleError: error => dispatch(addError(error)),
  addUserFavorites: favorites => dispatch(addAllFavorites(favorites)),
  clearError: () => dispatch(resolveError())
});

export default connect(
  null,
  mapDispatchToProps
)(LoginUser);
