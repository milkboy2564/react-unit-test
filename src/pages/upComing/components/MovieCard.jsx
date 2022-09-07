import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

function MovieCard({ data }) {
  const { results: movies } = data.data;
  console.log(movies);
  return (
    <MovieList>
      {movies.map(({ id, poster_path, title, vote_average }) => (
        <Movie key={id}>
          <ImgWrapper>
            <MovieImg src={`${IMAGE_URL}${poster_path}`} alt="movie poster" />
          </ImgWrapper>
          <InfoWrapper>
            <MovieTitle className="title">{title}</MovieTitle>
            <MovieVote>
              <AiFillStar />
              {vote_average}
            </MovieVote>
          </InfoWrapper>

        </Movie>
      ))}
    </MovieList>
  );
}

export default MovieCard;

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  gap: 1em;
  @media screen and (min-width: 380px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 580px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Movie = styled.li`
  padding: 0.4em 0.4em 1em 0.4em;
  border-radius: 5px;
  box-shadow: 0 12px 16px hsla(228, 66%, 45%, 0.1);
  display: grid;
  row-gap: 0.5em;
  a {
    color: black;
  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
`;

const MovieImg = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 298px;
  object-fit: fill;
  object-position: center center;
  :hover {
    transform: scale(1.4);
    transition: 0.3s;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  row-gap: 0.3em;
  justify-items: center;
`;

const MovieTitle = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
`;

const MovieVote = styled.span`
    display: flex;
    align-items: center;
    line-height: 120%;
    svg{
        color : ${({theme})=> theme.RED}
    }
`;
