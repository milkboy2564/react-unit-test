import React, { useEffect, useState } from 'react';
import SearchMovieCard from './components/SearchMovieCard';
import styled from 'styled-components';
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
      console.log(results);
      setMovies(results);
    } catch (e) {
      alert('검색 결과 에러');
    }
  };
  useEffect(() => {
    getSearchResult();
  }, [location]);

  return (
    <ListContainer>
      {movies.map(movie => (
        <SearchMovieCard key={movie.id} movie={movie}></SearchMovieCard>
      ))}
      {movies.length % 2 !== 0 && <DummyCard />}
    </ListContainer>
  );
}

const ListContainer = styled.div`
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
