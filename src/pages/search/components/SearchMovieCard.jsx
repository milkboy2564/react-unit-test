import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const genreList = {
  28: '액션',
  12: '모험',
  16: '애니메이션',
  35: '코미디',
  80: '범죄',
  99: '다큐멘터리',
  18: '드라마',
  10751: '가족',
  14: '판타지',
  36: '역사',
  27: '공포',
  10402: '음악',
  9648: '미스터리',
  10749: '로맨스',
  878: 'SF',
  10770: 'TV 영화',
  53: '스릴러',
  10752: '전쟁',
  37: '서부',
};
function SearchMovieCard({ movie }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <CardContainer>
      <MoviePoster
        src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`}
        onClick={handleNavigate}
      ></MoviePoster>
      <MovieInfoBox>
        <MovieTitle onClick={handleNavigate}>{movie.title}</MovieTitle>
        <MovieTitleEng>{movie.original_title}</MovieTitleEng>
        <MovieInfoDl>
          <MovieInfoDt>제작</MovieInfoDt>
          <MovieInfoDd>{movie.release_date}</MovieInfoDd>
        </MovieInfoDl>
        <MovieInfoDl>
          <MovieInfoDt>장르</MovieInfoDt>
          <MovieInfoDd>{movie.genre_ids.map(genre => `${genreList[genre]} `)}</MovieInfoDd>
        </MovieInfoDl>
        <MovieInfoDl>
          <MovieInfoDt>평점</MovieInfoDt>
          <MovieInfoDd>{movie.vote_average}</MovieInfoDd>
        </MovieInfoDl>
      </MovieInfoBox>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 500px;
  height: 188px;
  display: flex;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const MoviePoster = styled.img`
  width: 128px;
  height: 188px;
  border-radius: 10px;
  cursor: pointer;
`;

const MovieInfoBox = styled.div`
  width: auto;
  height: 188px;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const MovieTitle = styled.h1`
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;

const MovieTitleEng = styled.h2`
  font-size: 15px;
`;

const MovieInfoDl = styled.dl`
  display: flex;
  width: auto;
  height: 29px;
`;

const MovieInfoDt = styled.dt`
  color: gray;
  width: 48px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieInfoDd = styled.dd`
  width: auto;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SearchMovieCard;
