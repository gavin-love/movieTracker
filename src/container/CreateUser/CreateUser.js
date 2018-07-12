import React, { Component } from "react";
import { postNewUser } from "../../utilities/apiCalls/apiCalls";
import { connect } from 'react-redux';
import { updateStoreNewUser } from '../../Actions/index'

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
    if(response.id) {
      this.props.handleCreateUser({id: response.id});
    }
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
export const mapDispatchToProps = (dispatch) => ({
  handleCreateUser: (user) => dispatch(updateStoreNewUser(user))
})

export default CreateUser;
