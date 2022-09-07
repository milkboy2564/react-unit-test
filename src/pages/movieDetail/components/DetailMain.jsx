import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const DetailMain = ({ data }) => {
  const {
    title,
    original_title,
    poster_path,
    release_date,
    genres,
    production_countries,
    adult,
    runtime,
    vote_average,
    popularity,
    tagline,
  } = data;

  const url = process.env.REACT_APP_IMAGE_URL;
  const handleOnErrorImage = event => {
    event.target.src = '/errImage.png';
  };
  return (
    <Wrapper>
      <Poster>
        <PosterImage
          src={url + poster_path}
          alt={`${title} 포스터`}
          url={url}
          onError={handleOnErrorImage}
        />
      </Poster>
      <MovieIntro>
        <MovieTitle>
          <Korean>{title}</Korean>
          <OriginalName>{original_title}</OriginalName>
        </MovieTitle>
        <MovieTag>{tagline}</MovieTag>
        <DetailContents>
          <InnerContenst>
            <InfoList>
              {adult ? (
                <MovieInfoTitle style={{ color: `red` }}>미성년자 관람불가</MovieInfoTitle>
              ) : null}
            </InfoList>

            <InfoList>
              <MovieInfoTitle>개봉</MovieInfoTitle>
              <MovieInfoContents>{release_date}</MovieInfoContents>
            </InfoList>
            <InfoList>
              <MovieInfoTitle>장르</MovieInfoTitle>
              {Object.values(genres).map(genres => (
                <MovieInfoContents key={genres.id}>{genres.name}</MovieInfoContents>
              ))}
            </InfoList>
            <InfoList>
              <MovieInfoTitle>국가</MovieInfoTitle>
              {Object.values(production_countries).map(countries => (
                <MovieInfoContents key={countries.id}>{countries.name}</MovieInfoContents>
              ))}
            </InfoList>
            <InfoList>
              <MovieInfoTitle>러닝타임</MovieInfoTitle>
              <MovieInfoContents>{runtime}분</MovieInfoContents>
            </InfoList>
          </InnerContenst>
          <InnerContenst>
            <InfoList>
              <MovieInfoTitle>평점</MovieInfoTitle>
              <Stack spacing={1}>
                <Rating
                  name="read-only"
                  style={{ fontSize: '16px' }}
                  value={vote_average / 2}
                  readOnly
                />
              </Stack>
              <MovieInfoContents style={{ marginLeft: '6px' }}>
                {vote_average.toFixed(0)}
              </MovieInfoContents>
            </InfoList>
            <InfoList>
              <MovieInfoTitle>인기도</MovieInfoTitle>
              <MovieInfoContents>{popularity}</MovieInfoContents>
            </InfoList>
          </InnerContenst>
        </DetailContents>
      </MovieIntro>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: 1100px;
  min-height: 500px;
  padding: 70px 0 60px 0;
`;

const Poster = styled.div`
  width: 210px;
  height: 308px;
  margin-right: 40px;
  border-radius: 30px;
`;
const PosterImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;
const MovieTag = styled.div`
  margin-top: 14px;
  width: 40%;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 18px;
  font-weight: 600;
  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

const MovieIntro = styled.div`
  color: ${props => theme.black};
`;
const MovieTitle = styled.div``;
const Korean = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
`;
const OriginalName = styled.h3`
  font-size: 14px;
  line-height: 1.5;
`;
const DetailContents = styled.div`
  display: flex;
  padding: 20px 0 48px;
  align-items: flex-start;
`;
const InnerContenst = styled.div`
  display: table;
  margin-right: 24px;
  font-size: 16px;
`;
const InfoList = styled.dl`
  display: flex;
  align-items: center;
  line-height: 27px;
  font-size: 14px;
`;
const MovieInfoTitle = styled.dt`
  max-width: 100px;
  padding-right: 16px;
  font-weight: normal;
  color: ${props => theme.GRAY_1};
  white-space: nowrap;
`;
const MovieInfoContents = styled.dd`
  padding-right: 4px;
  word-break: break-all;
  word-wrap: break-word;
`;
export default DetailMain;
