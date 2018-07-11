import React from "react";
import { connect } from "react-redux";
import Card from "../../Components/Card/Card";

const CardContainer = ({ movies }) => {
  console.log(movies);
};

export const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  null
)(CardContainer);
