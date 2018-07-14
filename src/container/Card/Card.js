import React from "react";
import { connect } from "react-redux";
import { submitFavorite } from "../../utilities/apiCalls/apiCalls";
import { addFavorite } from "../../Actions/index";
import "./Card.css";

export const Card = props => {
  const {
    vote_average,
    overview,
    poster_path,
    release_date,
    title,
    movie_id
  } = props;

  const handleSubmitFavorite = () => {
    submitFavorite(props, props.user);
    props.handleFavorite(props);
  };

  const favoriteButton = (
    <div className="card_button" type="button" onClick={handleSubmitFavorite}>
      favorite
    </div>
  );

  return (
    <div className="card_div">
      <div
        className="card_image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`
        }}
      >
        <div className="rating_div">
          <h1 className="card_rating">{vote_average}</h1>
        </div>
      </div>
      {favoriteButton}
    </div>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  movies: state.movies
});

export const mapDispatchToProps = dispatch => ({
  handleFavorite: favorite => dispatch(addFavorite(favorite))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
