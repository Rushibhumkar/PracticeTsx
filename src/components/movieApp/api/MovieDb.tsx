import axios from 'axios';
import {apiKey} from '../constants';

const apiBaseUrl = `https://api.themoviedb.org/3`;
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

const movieDetailsEndpoint = (id: number) =>
  `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = (id: number) =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const similarMoviesEndpoint = (id: number) =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

const personDetailsEndpoint = (id: number) =>
  `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
const personMoviesEndpoint = (id: number) =>
  `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;

export const image500 = (posterPath: string | null) =>
  posterPath ? `https://image.tmdb.org/t/p/w500` + posterPath : null;
export const image342 = (posterPath: string | null) =>
  posterPath ? `https://image.tmdb.org/t/p/w342` + posterPath : null;
export const image185 = (posterPath: string | null) =>
  posterPath ? `https://image.tmdb.org/t/p/w185` + posterPath : null;
export const fallbackMoviePoster = `https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg`;
export const fallbackPersonImage = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwz0l61E483KTS7o&usqp=CAU`;

const apiCall = async (endpoint: any, params: any) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error:', error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};
export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};

export const fetchMovieDetails = (id: number) => {
  return apiCall(movieDetailsEndpoint(id));
};
export const fetchMovieCredits = (movieId: number) => {
  return apiCall(movieCreditsEndpoint(movieId));
};
export const fetchSimilarMovies = (movieId: number) => {
  return apiCall(similarMoviesEndpoint(movieId));
};

export const fetchPersonDetails = (personId: number) => {
  return apiCall(personDetailsEndpoint(personId));
};
export const fetchPersonMovies = (personId: number) => {
  return apiCall(personMoviesEndpoint(personId));
};
export const searchMovies = (params: string | any) => {
  return apiCall(searchMoviesEndpoint, params);
};
