import React, { Component } from "react";
import { runInThisContext } from "vm";

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

  handleSubmit = async () => {
    const response = await postNewUser(this.state);
  };

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

export default CreateUser;
