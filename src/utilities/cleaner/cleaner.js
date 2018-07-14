export const cleanMovies = data => {
  const movies = data.map(movie => {
    return {
      title: movie.title,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: movie.poster_path,
      movie_id: movie.id
    };
  });
  return movies;
};
