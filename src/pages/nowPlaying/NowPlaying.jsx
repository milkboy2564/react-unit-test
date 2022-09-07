import { useEffect, useState } from 'react';
import { getDatasetAtEvent } from 'react-chartjs-2';
import styled from 'styled-components';
import { movieApi } from '../../services/api';
import Card from './components/Card';
function NowPlaying() {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const res = await movieApi.nowPlaying();
      console.log(res);
      setData(res.data.results);
    }

    getData();
  }, []);
  return (
    <Wrap>
      {data &&
        data.map(data => {
          return <Card key={data.id} data={data}></Card>;
        })}
    </Wrap>
  );
}
const Wrap = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  justify-items: center;
`;

export default NowPlaying;
