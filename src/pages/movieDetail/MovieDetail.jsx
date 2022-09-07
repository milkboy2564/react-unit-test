import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { movieApi } from '../../services/api';
import DetailMain from './components/DetailMain';
import DetailSub from './components/DetailSub';

function MovieDetail() {
  const { movie_id } = useParams();
  const { data: movieData } = useQuery(
    ['detail', movie_id],
    () => {
      return movieApi.movieDetail(movie_id);
    },
    {
      staleTime: 180000,
      enabled: !!movie_id,
      suspense: true,
      onError: res => {
        console.error(res);
      },
    }
  );

  const { data: videoData } = useQuery(
    ['videos', movie_id],
    () => {
      return movieApi.movieVideos(movie_id);
    },
    {
      staleTime: 180000,
      enabled: !!movie_id,
      suspense: true,
      onError: res => {
        console.error(res);
      },
    }
  );

  const { data: creditData } = useQuery(
    ['credits', movie_id],
    () => {
      return movieApi.movieCredits(movie_id);
    },
    {
      staleTime: 180000,
      enabled: !!movie_id,
      suspense: true,
      onError: res => {
        console.error(res);
      },
    }
  );

  return (
    <Wrap>
      {movieData && videoData && creditData && (
        <>
          <DetailMain data={movieData.data} />
          <DetailSub movieData={movieData.data} videoData={videoData} creditData={creditData} />
        </>
      )}
    </Wrap>
  );
}

export default MovieDetail;

const Wrap = styled.div`
  width: 1100px;
  margin: 0px auto;
`;
