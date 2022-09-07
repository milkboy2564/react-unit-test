import React, { useCallback, useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { movieApi } from '../../services/api';
import MovieCard from './components/MovieCard';

function UpComing() {
  const { isLoading, data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery('upcoming', ({ pageParam = 1 }) => movieApi.upcoming(pageParam), {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1
        return nextPage >= lastPage.data.total_pages ? undefined : nextPage
      },
    });

  const loadMoreRef = useRef(null);

  const handleObserver = useCallback(
    entries => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = loadMoreRef.current;
    const option = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  return (
    <Main>
    <Section>
      <SectionTitle>상영예정작</SectionTitle>
      {isLoading ? <div>로딩중 표시</div> : isSuccess && (
          data.pages.map(page=> <MovieCard key={page.data.page} page={page}/>)
      )}
    </Section>
    <Observer ref={loadMoreRef}>{isFetchingNextPage && hasNextPage ? '로딩중' : ''}</Observer>
  </Main>
  );
}

export default UpComing;

const Main = styled.main`
  height: 100%;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  width: 100%;
`;
const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-align: center;
`;
const Observer = styled.div``;
