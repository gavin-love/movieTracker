import React from "react";
import { connect } from "react-redux";
import {
  submitFavorite,
  removeFavorite
} from "../../utilities/apiCalls/apiCalls";
import { addFavorite, removeFavoriteFromStore, addError } from "../../Actions";
import "./Card.css";
import PropTypes from 'prop-types';

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

  const favoriteIds = props.favorites.map(favorite => favorite.movie_id);

  const handleRemoveFavorite = () => {
    removeFavorite({ movie_id, user_id: props.user.user_id });
    props.handleRemove(movie_id);
  };

  const favoriteButton = (
    <div
      className="favorite_button"
      type="button"
      onClick={() => {
        props.user.user_id
          ? handleSubmitFavorite()
          : props.handleError("Login to add favorites");
      }}
    >
      Favorite
    </div>
  );

  const deleteButton = (
    <div className="remove_button" type="button" onClick={handleRemoveFavorite}>
      Remove
    </div>
  );

  return (
    <div className="card_div">
      <div className="overview-div">
        <h2 className="movie-title">{title}</h2>
        <h4 className="movie-date">{release_date}</h4>
        <p>{overview}</p>
      </div>
      <div
        className="card_image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`
        }}
      >
        <div className="rating_div">
          <h3 className="card_rating">{vote_average}</h3>
        </div>
      </div>
      {favoriteIds.includes(movie_id) ? deleteButton : favoriteButton}
    </div>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  handleFavorite: favorite => dispatch(addFavorite(favorite)),
  handleRemove: movie_id => dispatch(removeFavoriteFromStore(movie_id)),
  handleError: error => dispatch(addError(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);


Card.propTypes = {
  user: PropTypes.object,
  favorites: PropTypes.arrayOf(PropTypes.object),
  handleFavorite: PropTypes.func,
  handleRemove: PropTypes.func,
  handleError: PropTypes.func,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.number,
  title: PropTypes.string,
  movie_id: PropTypes.number
};