import apiKey from "../../apiKey";
import { cleanMovies } from "../cleaner/cleaner";

export const movieFetch = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;

  const response = await fetch(url);
  const movieData = await response.json();
  const movieResults = movieData.results;
  return cleanMovies(movieResults);
};
