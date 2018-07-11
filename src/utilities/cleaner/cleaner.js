export const cleanMovies = data => {
  const movies = data.map(movie => {
    return {
      rating: movie.vote_average,
      summary: movie.overview,
      image: movie.poster_path
    };
  });
  return movies;
};
