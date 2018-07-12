import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../utilities/apiCalls/apiCalls.js';
import { updateUser, addError } from '../../Actions/index.js';

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
    try {
      const userData = await getUser(this.state);
      this.props.handleLogin(userData.data);
    } catch(error) {
      this.props.handleError('Email or Password do not match');
    }
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

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (user) => dispatch(updateUser(user)),
  handleError: (error) => dispatch(addError(error))
})

export default connect(null, mapDispatchToProps)(LoginUser);