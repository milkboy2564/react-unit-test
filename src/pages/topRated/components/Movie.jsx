import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Movie({ movie, rank }) {
  return (
    <Container to={`/movie/${movie.id}`}>
      <ThumbItem>
        <ImageWrapper>
          <img src={process.env.REACT_APP_IMAGE_URL + movie.poster_path} />
        </ImageWrapper>
        <BackInfoWrapper>
          <p>{movie.overview}</p>
        </BackInfoWrapper>
      </ThumbItem>
      <ThumbContent>
        <strong>{movie.title}</strong>
        <span className="content_popularity">
          <span>
            평점 <span className="content_star">{movie.vote_average}</span>
          </span>
          <span>
            인기도 <span>{movie.popularity}</span>
          </span>
        </span>
        <span className="content_date">개봉 {movie.release_date}</span>
      </ThumbContent>
      <RankNumber>{rank}</RankNumber>
    </Container>
  );
}

const Container = styled(Link)`
  width: 204px;
  position: relative;
`;

const ThumbItem = styled.div`
  width: 100%;
  height: 298px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BackInfoWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 15, 15, 0.6);
  transition: all 0.2s ease-out 0.3s;
  opacity: 0;
  &:hover {
    opacity: 1;
  }

  p {
    padding: 29px 24px 0;
    width: 204px;
    max-height: 200px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;

    color: ${({ theme }) => theme.WHITE_1};
    font-size: 15px;
    line-height: 1.4;
  }
`;

const ThumbContent = styled.div`
  padding: 17px 8px 0;
  strong {
    display: block;
    width: 204px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
  }

  span.content_popularity,
  span.content_date {
    display: block;
    font-size: small;
  }

  span.content_popularity {
    padding-top: 7px;
    span {
      margin-right: 2px;
    }
  }

  span.content_date {
    padding-top: 3px;
    color: ${({ theme }) => theme.GRAY_1};
  }

  span.content_star {
    color: ${({ theme }) => theme.RED};
  }
`;

const RankNumber = styled.span`
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 13px;
  font-size: 32px;
  color: ${({ theme }) => theme.WHITE_1};
  text-shadow: 0 0 2px rgb(0 0 0 / 20%);
`;

export default Movie;
