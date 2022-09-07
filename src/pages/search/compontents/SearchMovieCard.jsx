import React from 'react';
import styled from 'styled-components';

const mockData = {
  adult: false,
  backdrop_path: '/vvObT0eIWGlArLQx3K5wZ0uT812.jpg',
  genre_ids: [28, 12, 14],
  id: 616037,
  original_language: 'en',
  original_title: 'Thor: Love and Thunder',
  overview:
    '이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나, 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나버린다. 토르는새로운 위협에 맞서기 위해, 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되는데. 그녀가 묠니르를 휘두르는 마이티 토르가 되어 나타나 모두를 놀라게 한다. 이제, 팀 토르는 고르의 복수에 얽힌 미스터리를 밝히고 더 큰 전쟁을 막기 위한 전 우주적 스케일의 모험을 시작하는데...',
  popularity: 4630.653,
  poster_path: '/bZLrpWM065h5bu1msUcPmLFsHBe.jpg',
  release_date: '2022-07-06',
  title: '토르: 러브 앤 썬더',
  video: false,
  vote_average: 6.7,
  vote_count: 2244,
};

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
function SearchMovieCard() {
  return (
    <CardContainer>
      <MoviePoster
        src={`${process.env.REACT_APP_IMAGE_URL}/bZLrpWM065h5bu1msUcPmLFsHBe.jpg`}
      ></MoviePoster>
      <MovieInfoBox>
        <MovieTitle>{mockData.title}</MovieTitle>
        <MovieTitleEng>{mockData.original_title}</MovieTitleEng>
        <MovieInfoDl>
          <MovieInfoDt>제작</MovieInfoDt>
          <MovieInfoDd>{mockData.release_date}</MovieInfoDd>
        </MovieInfoDl>
        <MovieInfoDl>
          <MovieInfoDt>장르</MovieInfoDt>
          <MovieInfoDd>{mockData.genre_ids.map(genre => `${genreList[genre]} `)}</MovieInfoDd>
        </MovieInfoDl>
        <MovieInfoDl>
          <MovieInfoDt>평점</MovieInfoDt>
          <MovieInfoDd>{mockData.vote_average}</MovieInfoDd>
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
  border: 1px solid black;
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
  border: 1px solid red;
`;

const MovieTitle = styled.h1`
  font-weight: bold;
  font-size: 18px;
`;

const MovieTitleEng = styled.h2`
  font-size: 15px;
`;

const MovieInfoDl = styled.dl`
  border: 1px solid green;
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
  border: 1px solid purple;
`;

const MovieInfoDd = styled.dd`
  width: 138px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
`;

export default SearchMovieCard;
