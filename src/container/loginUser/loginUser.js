import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../utilities/apiCalls/apiCalls.js';

export class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const userData = await getUser(this.state);
    this.props.handleLogin(userData.data);
  }

  render() {
    return(
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
      )
  }
}

export default LoginUser;