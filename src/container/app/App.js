import React, { Component } from "react";
import "./App.css";
import { movieFetch } from "../../utilities/apiCalls/apiCalls";
import { addRecentMovies } from '../../Actions/index.js';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const movies = await movieFetch();
    this.props.handleMovies(movies);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  handleMovies: (movies) => dispatch(addRecentMovies(movies))
}

export default connect(null, mapDispatchToProps)(App);
