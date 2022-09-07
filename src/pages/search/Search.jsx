import React from 'react';
import SearchMovieCard from './components/SearchMovieCard';
import styled from 'styled-components';
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
    <ListContainer>
      {movieResult?.data?.results.map(movie => (
        <SearchMovieCard key={movie.id} movie={movie}></SearchMovieCard>
      ))}
      {movieResult?.data?.results.length % 2 !== 0 && <DummyCard />}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DummyCard = styled.div`
  width: 500px;
  height: 188px;
  margin: 10px;
`;

export default Search;
