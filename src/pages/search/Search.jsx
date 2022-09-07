import React, { useEffect, useState } from 'react';
import SearchMovieCard from './components/SearchMovieCard';
import { searchApi } from '../../services/api';
import { useLocation } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const getSearchResult = async () => {
    try {
      const {
        data: { results },
      } = await searchApi.movies(decodeURI(location.search.slice(3)));
      setMovies(results);
    } catch (e) {
      alert('검색 결과 에러');
    }
  };
  useEffect(() => {
    getSearchResult();
  }, [location]);

  return (
    <>
      {movies.map(movie => (
        <SearchMovieCard key={movie.id} movie={movie}></SearchMovieCard>
      ))}
    </>
  );
}

export default Search;
