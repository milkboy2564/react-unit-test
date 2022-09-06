import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'ko',
  },
});

export const movieApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  toprated: page => api.get(`movie/top_rated?page=${page}`),
  movieDetail: movie_id => api.get(`movie/${movie_id}`),
};

export const searchApi = {
  movies: term =>
    api.get('search/movie', {
      params: {
        query: term, // 특수문자나 스페이스 등을 인코딩 하는 과정
      },
    }),
};
