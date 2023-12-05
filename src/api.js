import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8e21f34d58b1a578e492fe7e575bb39e';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get('/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get('/search/movie', {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    throw error;
  }
};
