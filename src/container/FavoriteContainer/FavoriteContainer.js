import React from "react";
import { connect } from "react-redux";
import Card from "../../container/Card/Card";
import PropTypes from 'prop-types';

export const FavoriteContainer = props => {
  const displayFavorites = props.favorites.map(favorite => {
    return <Card {...favorite} key={favorite.movie_id} />;
  });
  const noFavorites = <p>Select favorites to view here!</p>;
  return (
    <div className="card_section">
      {props.favorites.length ? displayFavorites : noFavorites}
    </div>
  );
};

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(
  mapStateToProps,
  null
)(FavoriteContainer);


FavoriteContainer.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object)
};