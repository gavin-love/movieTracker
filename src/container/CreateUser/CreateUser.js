import React, { Component } from "react";
import { postNewUser } from "../../utilities/apiCalls/apiCalls";
import { connect } from "react-redux";
import { updateUser, addError, resolveError } from "../../Actions/index";
import "./CreateUser.css";
import PropTypes from 'prop-types'

export class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
      const response = await postNewUser(this.state);
      await this.props.handleCreateUser({ id: response.id });
      this.props.clearError();
    } catch (error) {
      this.props.handleError("Email already exists or Password does not match");
    }
  };

  render() {
    return (
      <form className="sign_up" onSubmit={this.handleSubmit}>
        <h5 className="create_title">Create Account</h5>
        <input
          className="create_user"
          type="text"
          name="name"
          value={this.state.name}
          placeholder="name"
          onChange={this.handleChange}
        />
        <input
          className="create_user"
          type="text"
          name="email"
          value={this.state.email}
          placeholder="email"
          onChange={this.handleChange}
        />
        <input
          className="create_user"
          type="password"
          name="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.handleChange}
        />
        <button className="create_button">Submit</button>
      </form>
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  handleCreateUser: user => dispatch(updateUser(user)),
  handleError: error => dispatch(addError(error)),
  clearError: () => dispatch(resolveError())
});

export default connect(
  null,
  mapDispatchToProps
)(CreateUser);

CreateUser.propTypes = {
  handleCreateUser: PropTypes.func,
  handleError: PropTypes.func,
  clearError: PropTypes.func
}