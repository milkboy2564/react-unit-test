import styled from 'styled-components';
import Layout from './components/Layout';
import useScrollFetchData from './hook/useScrollFetchData';
import Movie from './components/Movie';
import useInterSect from './hook/useInterSect';
import { useMemo } from 'react';

function TopRated() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useScrollFetchData({
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

  const onUpClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <PageContainer>
        {pageDatas.length &&
          pageDatas.map((item, index) => <Movie key={item.id} movie={item} rank={index + 1} />)}
        <Target ref={ref} />
        <UpButton onClick={onUpClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </UpButton>
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

const UpButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  background-color: rgba(15, 15, 15, 0.6);
  color: white;
  border-radius: 50%;
  &:active {
    transform: scale(0.98);
  }
`;

export default TopRated;
