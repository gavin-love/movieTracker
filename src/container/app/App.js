import React, { Component } from "react";
import "./App.css";
import { movieFetch } from "../../utilities/apiCalls/apiCalls";
import { addRecentMovies } from "../../Actions/index";
import { connect } from "react-redux";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Login from "../../Components/Login/Login";
import Header from "../../Components/Header/Header";
import FavoriteContainer from "../FavoriteContainer/FavoriteContainer";
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    try {
      const movies = await movieFetch();
      this.props.handleMovies(movies);
    } catch (error) {
      throw new Error();
    }
  };

  render() {
    return (
      <div className="App">
        <header className="app_header">
          <Header />
        </header>
        {this.props.error && <p>{this.props.error}</p>}
        <Switch>
          <Route
            exact
            path="/login"
            render={() =>
              this.props.user.user_id ? <Redirect to="/" /> : <Login />
            }
          />
        </Switch>
        <Route exact path="/" component={CardContainer} />
        <Route exact path="/favorites" component={FavoriteContainer} />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleMovies: movies => dispatch(addRecentMovies(movies))
});

export const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);


App.propTypes = {
  user: PropTypes.object,
  error: PropTypes.string,
  handleMovies: PropTypes.func
};