import React from "react";
import "./Card.css";

export const Card = ({ rating, summary, image }) => {
  console.log(image);
  return (
    <div className="card_div">
      <div
        className="card_image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`
        }}
      >
        <div className="rating_div">
          <h1 className="card_rating">{rating}</h1>
        </div>
      </div>
      <button className="card_button">favorite</button>
    </div>
  );
};
