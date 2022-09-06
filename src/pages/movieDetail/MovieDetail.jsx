import styled from 'styled-components';
import DetailMain from './components/DetailMain';
import DetailSub from './components/DetailSub';
const MovieDetail = () => {
  // api 요청
  return (
    <Wrap>
      <DetailMain />
      <DetailSub />
    </Wrap>
  );
};

export default MovieDetail;

const Wrap = styled.div``;
