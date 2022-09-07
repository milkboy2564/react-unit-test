import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { movieApi } from '../../services/api';
import MovieCard from './components/MovieCard';

function UpComing() {
  const { isLoading, data } = useQuery('upcoming', movieApi.upcoming);
  return (
    <Main>
      <Section>
        <SectionTitle>상영예정작</SectionTitle>
        {isLoading ? <div>로딩중 표시</div> : <MovieCard data={data} />}
      </Section>
    </Main>
  );
}

export default UpComing;

const Main = styled.main`
  height: 100%;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  width: 100%;
`;
const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-align: center;
`;
