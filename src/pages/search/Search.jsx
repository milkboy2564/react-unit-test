import React from 'react';
import SearchMovieCard from './components/SearchMovieCard';
import { searchApi } from '../../services/api';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

function Search() {
  const location = useLocation();
  const searchWord = location.search.slice(3);
  const { data: movieResult } = useQuery(
    ['search', searchWord],
    () => searchApi.movies(decodeURI(searchWord)),
    {
      enabled: !!searchWord,
      refetchOnWindowFocus: false,
      staleTime: 180000,
    }
  );

  return (
    <>
      {movieResult?.data?.results.map(movie => (
        <SearchMovieCard key={movie.id} movie={movie}></SearchMovieCard>
      ))}
    </>
  );
}

export default Search;
