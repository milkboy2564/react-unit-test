import { useInfiniteQuery } from 'react-query';
import { movieApi } from '../../../services/api';

const useScrollFetchData = ({ apiKey }) =>
  useInfiniteQuery('toprated', ({ pageParam = 1 }) => movieApi[apiKey](pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.page + 1;
    },
  });

export default useScrollFetchData;
