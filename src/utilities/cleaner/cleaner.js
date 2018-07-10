export const cleanMovies = data => {
  const movies = data.map(movie => {
    return {
      rating: movie.vote_average,
      summary: movie.overview,
      image: movie.backdrop_path
    };
  });
  return movies;
};
