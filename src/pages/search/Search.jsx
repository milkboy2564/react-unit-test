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
    <>
      <ListContainer>
        <SearchResultText>
          '<SearchWord>{`${decodeURI(searchWord)}`}</SearchWord>'
          {` 검색 결과 ${movieResult?.data?.results.length}건`}
        </SearchResultText>
        {movieResult?.data?.results.map(movie => (
          <SearchMovieCard key={movie.id} movie={movie}></SearchMovieCard>
        ))}
        {movieResult?.data?.results.length % 2 !== 0 && <DummyCard />}
      </ListContainer>
    </>
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

const SearchResultText = styled.p`
  width: 1000px;
  height: 100px;
  font-size: 34px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const SearchWord = styled.p`
  font-size: 34px;
  font-weight: bold;
  color: red;
`;

export default Search;
