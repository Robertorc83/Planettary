import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Custom hook to fetch data using React Query and Axios with caching and pagination.
 * @param endpoint The API endpoint to fetch data from.
 * @param queryParams The query parameters for the request.
 * @param shouldFetch A boolean to determine if the fetch should be executed.
 * @returns An object containing the fetched data, loading state, error state, error message, and a refetch function.
 */
const useFetchData = <T>(
  endpoint: string,
  queryParams: Record<string, number>,
  shouldFetch: boolean,
  onSuccessCallback?: () => void,
): FetchDataResult<T> => {
  const fetcher = async (): Promise<T> => {
    const response = await axios.get<T>(endpoint, {
      params: queryParams,
    });
    return response.data;
  };

  const {data, isLoading, isError, error, refetch} = useQuery<T, Error>(
    [endpoint, queryParams],
    fetcher,
    {
      enabled: shouldFetch,
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30,
      retry: 5,
      onSuccess: () => {
        if (onSuccessCallback) {
          onSuccessCallback(); // Call the callback if provided
        }
      }, // 30 minutes
    },
  );

  return {
    data: data || null,
    isLoading,
    isError,
    error: error?.message || null,
    refetch,
  };
};

export default useFetchData;
