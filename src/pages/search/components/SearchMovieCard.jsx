import React from 'react';
import styled from 'styled-components';

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
  return (
    <CardContainer>
      <MoviePoster src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`}></MoviePoster>
      <MovieInfoBox>
        <MovieTitle>{movie.title}</MovieTitle>
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
  width: 350px;
  height: 188px;
  display: flex;
  justify-content: space-between;
`;

const MoviePoster = styled.img`
  width: 128px;
  height: 188px;
`;

const MovieInfoBox = styled.div`
  width: 172px;
  height: 188px;
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.h1`
  font-weight: bold;
  font-size: 18px;
`;

const MovieTitleEng = styled.h2`
  font-size: 15px;
`;

const MovieInfoDl = styled.dl`
  display: flex;
  width: 172px;
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
  width: 138px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SearchMovieCard;
