import React, { Component } from "react";
import { postNewUser } from "../../utilities/apiCalls/apiCalls";
import { connect } from "react-redux";
import { updateUser, addError } from "../../Actions/index";

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
    } catch (error) {
      this.props.handleError("Email already exists or Password does not match");
    }
  };

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const userData = await getUser(this.state);
  //     this.props.handleLogin(userData.data);
  //   } catch (error) {
  //     this.props.handleError('Email or Password do not match');
  //   }
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          value={this.state.email}
          placeholder="email"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  handleCreateUser: user => dispatch(updateUser(user)),
  handleError: error => dispatch(addError(error))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateUser);
