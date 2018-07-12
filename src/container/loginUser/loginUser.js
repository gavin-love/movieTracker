import React, { Component } from 'react';
import { connect } from 'react-redux';

export class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return(
        <form>
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