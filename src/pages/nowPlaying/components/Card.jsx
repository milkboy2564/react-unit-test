import { useEffect } from 'react';
import styled from 'styled-components';
import StarRate from './StarRate';

function Card({ data }) {
  const ImgUrl = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <CardContainer>
      <>
        <CardBackGround
          width="250px"
          height="300px"
          src={ImgUrl + data.poster_path}
        ></CardBackGround>
        <CardInfoBox>
          <CardTitle>
            {data.title.length >= 30 ? data.title.slice(0, 30) + '...' : data.title}
          </CardTitle>
          <StarRate vote_average={data.vote_average} id={data.id} />

          <CardVote>{data.vote_average}</CardVote>

          <CardReleaseDate>{'개봉일 :' + ' ' + data.release_date}</CardReleaseDate>
        </CardInfoBox>
      </>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  text-align: center;
  width: 280px;
  height: 400px;
  border-radius: 30px;
`;
const CardBackGround = styled.img`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const CardInfoBox = styled.div`
  padding: 0 10px 0 10px;
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
