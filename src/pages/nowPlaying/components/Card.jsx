import { useEffect } from 'react';
import styled from 'styled-components';
import StarRate from './StarRate';

function Card({ data }) {
  const ImgUrl = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    console.log(data);
  });
  return (
    <CardContainer>
      <>
        <CardBackGround
          width="250px"
          height="300px"
          src={ImgUrl + data.poster_path}
        ></CardBackGround>
        <CardDetail>
          {data.overview.length >= 80 ? data.overview.slice(0, 80) + '....' : data.overview}
        </CardDetail>
        <CardInfoBox>
          <CardTitle>{data.title}</CardTitle>
          <StarRate vote_average={data.vote_average} />

          <CardVote>{data.vote_average}</CardVote>

          <CardReleaseDate>{'개봉일 :' + ' ' + data.release_date}</CardReleaseDate>
        </CardInfoBox>
      </>
    </CardContainer>
  );
}

const CardBackGround = styled.img`
  margin-top: 20px;
  margin-bottom: 10px;
`;
const CardDetail = styled.div`
  display: none;
`;
const CardInfoBox = styled.div`
  padding: 0 10px 0 10px;
`;
const CardContainer = styled.div`
  text-align: center;
  width: 280px;
  height: 450px;
  border-radius: 30px;
  &:hover {
    background-color: skyblue;
    opacity: 0.6;
    ${CardBackGround} {
      src: '';
      display: none;
      width: 0px;
    }
    ${CardDetail} {
      padding: 50px;
      font-size: 15px;
      display: block;
    }
  }
`;

const CardTitle = styled.div`
  font-weight: 900;
  margin-bottom: 10px;
`;
const CardReleaseDate = styled.div`
  color: gray;
`;
const CardVote = styled.div``;

export default Card;
