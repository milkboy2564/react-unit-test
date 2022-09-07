import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { movieApi } from '../../services/api';
import Card from './components/Card';
import { useInView } from 'react-intersection-observer';

function NowPlaying() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  async function getData() {
    let res = '';
    if (page === 1) {
      res = await movieApi.nowPlaying(page);
      setData(res.data.results);
    } else {
      res = await movieApi.nowPlaying(page + 1);
      setData(current => {
        const tempData = [...current, ...res.data.results];
        return tempData;
      });
    }
    setPage(page + 1);
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  useEffect(() => {
    if (inView) {
      getData();
    }
  }, [inView]);

  return (
    <Wrap>
      {data?.map(data => {
        return (
          <div key={data.id} ref={ref}>
            <Card key={data.id} data={data}></Card>
          </div>
        );
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
