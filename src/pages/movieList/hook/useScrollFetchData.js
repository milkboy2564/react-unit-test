import { useInfiniteQuery } from 'react-query';
import { movieApi } from '../../../services/api';

const useScrollFetchData = ({ apiKey }) =>
  useInfiniteQuery(apiKey, ({ pageParam = 1 }) => movieApi[apiKey](pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.page + 1;
    },
    refetchOnWindowFocus: false,
    staleTime: 180000,
    suspense: true,
  });

export default useScrollFetchData;
