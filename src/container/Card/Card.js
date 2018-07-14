import React from "react";
import { connect } from "react-redux";
import {
  submitFavorite,
  removeFavorite
} from "../../utilities/apiCalls/apiCalls";
import { addFavorite, removeFavoriteFromStore } from "../../Actions/index";
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

  const favoriteIds = props.favorites.map(favorite => favorite.movie_id);

  const handleRemoveFavorite = () => {
    removeFavorite({ movie_id, user_id: props.user.user_id });
    props.handleRemove(movie_id);
  };

  const favoriteButton = (
    <div
      className="favorite_button"
      type="button"
      onClick={handleSubmitFavorite}
    >
      favorite
    </div>
  );

  const deleteButton = (
    <div className="remove_button" type="button" onClick={handleRemoveFavorite}>
      un-favorite
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
  handleRemove: movie_id => dispatch(removeFavoriteFromStore(movie_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
