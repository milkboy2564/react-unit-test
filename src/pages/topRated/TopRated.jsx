import styled from 'styled-components';
import Layout from './components/Layout';
import useScrollFetchData from './hook/useScrollFetchData';
import Movie from './components/Movie';
import useInterSect from './hook/useInterSect';
import { useMemo } from 'react';

function TopRated() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useScrollFetchData({
    size: 1,
    apiKey: 'toprated',
  });

  const pageDatas = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.results) : []),
    [data]
  );

  const ref = useInterSect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <Layout>
      <PageContainer>
        {pageDatas.length &&
          pageDatas.map((item, index) => <Movie key={item.id} movie={item} rank={index + 1} />)}
        <Target ref={ref} />
      </PageContainer>
    </Layout>
  );
}

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 10px;
  row-gap: 20px;
`;

const Target = styled.div`
  height: 1px;
`;

export default TopRated;
