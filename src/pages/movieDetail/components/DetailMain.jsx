import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import StarRate from '../../../components/StarRate';
import ImageCard from '../../../components/ImageCard';
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
    tagline,
  } = data;

  const url = process.env.REACT_APP_IMAGE_URL;

  // const MOVIE_SIMPLE_INFO = [
  //   {
  //     name: '개봉 일자',
  //     contents: release_date,
  //   },
  //   {
  //     name: '장르',
  //     contents: genres,
  //   },
  //   {
  //     name: '국가',
  //     contents: production_countries,
  //   },
  //   { name: '러닝타임', contents: runtime },
  //   { name: '평점', contents: vote_average },
  // ];

  return (
    <Wrapper>
      <Poster>
        {poster_path && <ImageCard src={url + poster_path} alt={`${title} 포스터`} url={url} />}
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
              <MovieInfoContents>
                <StarRate vote_average={vote_average} width={16}></StarRate>
              </MovieInfoContents>
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

const MovieTag = styled.div`
  margin-top: 14px;
  width: 100%;
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
  font-size: 14px;
  margin-bottom: 10px;
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
  margin-left: 6px;
  word-break: break-all;
  word-wrap: break-word;
`;
export default DetailMain;
