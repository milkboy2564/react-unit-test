import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { movieApi } from '../../services/api';
import DetailMain from './components/DetailMain';
import DetailSub from './components/DetailSub';

function MovieDetail() {
  const { movie_id } = useParams();
  const { data: movieData } = useQuery(['detail'], () => movieApi.movieDetail(movie_id), {});

  const { data: videoData } = useQuery(['videos'], () => movieApi.movieVideos(movie_id), {});

  const { data: creditData } = useQuery(['credits'], () => movieApi.movieCredits(movie_id), {});

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
