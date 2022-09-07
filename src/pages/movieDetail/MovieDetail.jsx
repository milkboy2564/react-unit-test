import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { movieApi } from '../../services/api';
import DetailMain from './components/DetailMain';
import DetailSub from './components/DetailSub';

function MovieDetail() {
  const { movie_id } = useParams();
  const { data: movieData } = useQuery(
    ['detail'],
    async () => {
      return await movieApi.movieDetail(movie_id);
    },
    {
      staleTime: 20000,
      enabled: !!movie_id,
      onError: res => {
        console.error(res);
      },
    }
  );

  const { data: videoData } = useQuery(
    ['videos'],
    async () => {
      return await movieApi.movieVideos(movie_id);
    },
    {
      staleTime: 20000,
      enabled: !!movie_id,
      onError: res => {
        console.error(res);
      },
    }
  );

  const { data: creditData } = useQuery(
    ['credits'],
    async () => {
      return await movieApi.movieCredits(movie_id);
    },
    {
      staleTime: 20000,
      enabled: !!movie_id,
      onError: res => {
        console.error(res);
      },
    }
  );

  return (
    <Wrap>
      <DetailMain />
      {movieData && videoData && creditData && (
        <DetailSub movieData={movieData.data} videoData={videoData} creditData={creditData} />

      )}
    </Wrap>
  );
}

export default MovieDetail;

const Wrap = styled.div`
  width: 1100px;
  margin: 0px auto;
`;
