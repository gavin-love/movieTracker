import React from "react";
import "./Card.css";

export const Card = ({ rating, summary, image }) => {
  console.log(image);
  return (
    <div className="card_div">
      <div className="image_div">
        <img
          className="card_image"
          src={`https://image.tmdb.org/t/p/w500${image}`}
        />
      </div>
      <p className="card_summary">{summary}</p>
      <h1 className="card_rating">{rating}</h1>
      <button className="card_button">favorite</button>
    </div>
  );
};
