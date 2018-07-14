import React from "react";
import "./Card.css";

export const Card = ({
  vote_average,
  overview,
  poster_path,
  release_date,
  title,
  movie_id
}) => {
  // handleSubmitFavorite = () => {};

  // handleRemoveFavorite = () => {};

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
      <button className="card_button">favorite</button>
    </div>
  );
};
