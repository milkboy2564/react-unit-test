import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { movieApi } from '../../../services/api';
import { useQuery } from 'react-query';
import PreviewVideo from '../components/PreviewVideo';
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
let timerId = 0;
function SearchMovieCard({ movie }) {
  const navigate = useNavigate();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [mousePreview, setMousePreview] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleNavigate = () => {
    navigate(`/movie/${movie.id}`);
  };
  const { data: videoData } = useQuery(
    ['preview' + movie.id],
    () => {
      return movieApi.movieVideos(movie.id);
    },
    {
      staleTime: 180000,
      enabled: !!movie.id,
      suspense: true,
      onError: res => {
        console.error(res);
      },
    }
  );
  const handlePreviewOpen = e => {
    if (videoData.data.results.length > 0) {
      setMousePos(cur => ({ x: e.clientX, y: e.clientY }));
      setMousePreview(true);
      timerId = setInterval(() => {
        setPreviewOpen(true);
        clearInterval(timerId);
      }, 3000);
    }
  };

  const handleOnMouseOut = () => {
    setMousePreview(false);
    clearInterval(timerId);
  };

  const handlePreviewClose = () => {
    setPreviewOpen(false);
  };

  return (
    <div>
      {previewOpen && (
        <PreviewVideo videoData={videoData} handlePreviewClose={handlePreviewClose}></PreviewVideo>
      )}
      {mousePreview && (
        <PreviewText style={{ position: 'absolute', left: mousePos.x, top: mousePos.y }}>
          미리보기
        </PreviewText>
      )}
      <CardContainer
        onClick={handleNavigate}
        onMouseOver={handlePreviewOpen}
        onMouseOut={handleOnMouseOut}
      >
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
            <MovieInfoDd>
              <StarText>★</StarText>
              {movie.vote_average}
            </MovieInfoDd>
          </MovieInfoDl>
        </MovieInfoBox>
      </CardContainer>
    </div>
  );
}

const CardContainer = styled.div`
  position: relative;
  width: 500px;
  height: 188px;
  display: flex;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const MoviePoster = styled.img`
  width: 128px;
  height: 188px;
  border-radius: 10px;
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
`;

const MovieTitleEng = styled.h2`
  font-size: 15px;
  margin-top: 10px;
`;

const MovieInfoDl = styled.dl`
  display: flex;
  width: auto;
  height: 29px;
  margin-top: 10px;
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

const StarText = styled.p`
  color: red;
  font-size: 15px;
  width: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PreviewText = styled.div`
  position: absolute;
  width: 70px;
  z-index: 1;
  pointer-events: none;
  font-weight: bold;
`;

export default SearchMovieCard;
