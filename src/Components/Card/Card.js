import React from "react";

const Card = ({ rating, summary, image }) => {
  console.log(image);
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} />
      <p>{summary}</p>
      <h1>{rating}</h1>
    </div>
  );
};

export default Card;
