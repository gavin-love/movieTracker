import React, { Component } from "react";
import "./App.css";
import { movieFetch } from "../../utilities/apiCalls/apiCalls";
import { addRecentMovies } from "../../Actions/index";
import { connect } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";

export class App extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    try {
    const movies = await movieFetch();
    this.props.handleMovies(movies);
    } catch(error) {
      throw new Error();
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CardContainer />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleMovies: movies => dispatch(addRecentMovies(movies))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
