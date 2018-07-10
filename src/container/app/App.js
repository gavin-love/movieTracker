import React, { Component } from "react";
import "./App.css";
import { movieFetch } from "../../utilities/apiCalls/apiCalls";

class App extends Component {
  async componentDidMount() {
    const movies = await movieFetch();
    console.log(movies);
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

export default App;
