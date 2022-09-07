import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const DetailMain = ({ movieDetail }) => {
  const {
    title,
    original_title,
    poster_path,
    release_date,
    genres,
    production_countries,
    adult,
    runtime,
  } = movieDetail;

  const isDataEmpty = Object.keys(movieDetail).length === 0;
  if (isDataEmpty) return <>Loading,...</>;

  return (
    <Wrapper>
      <Poster>
        <PosterImage src={`https://image.tmdb.org/t/p/original${poster_path}`} />
      </Poster>
      <MovieIntro>
        <MovieTitle>
          <Korean>{title}</Korean>
          <OriginalName>{original_title}</OriginalName>
        </MovieTitle>
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
              <MovieInfoContents>{runtime}분</MovieInfoContents>
            </InfoList>
            <InfoList>
              <MovieInfoTitle>누적 관객</MovieInfoTitle>
              <MovieInfoContents>{runtime}</MovieInfoContents>
            </InfoList>
          </InnerContenst>
        </DetailContents>
      </MovieIntro>
    </Wrapper>
  );
};
// const SIMPLE_INFOMATION = [{ 개봉: release_dates }, {}];
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
  margin-right: 20px;
  font-size: 16px;
`;
const InfoList = styled.dl`
  display: flex;
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
