import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'ko',
  },
});

export const movieApi = {
  now_playing: page => api.get(`movie/now_playing?page=${page}`),
  upcoming: page => api.get(`movie/upcoming?page=${page}`),
  popular: page => api.get(`movie/popular?page=${page}`),
  top_rated: page => api.get(`movie/top_rated?page=${page}`),
  movieDetail: movie_id => api.get(`movie/${movie_id}`),
  movieCredits: movie_id => api.get(`movie/${movie_id}/credits`),
  movieVideos: movie_id => api.get(`movie/${movie_id}/videos`),
};

export const searchApi = {
  movies: term =>
    api.get('search/movie', {
      params: {
        query: term, // 특수문자나 스페이스 등을 인코딩 하는 과정
      },
    }),
  genre: () => api.get('genre/movie/list'),
};
