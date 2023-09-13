import {useState, useEffect} from 'react';

import useFetchData from '@/hooks/useFetchData';
import useInfiniteScroll from '@/hooks/useInfiniteScrolling';
import {getMarsPhotoEndpoint} from '@/services/nasaService';
import {useSearchNasa} from '@/hooks/useSearchNasa';

import {MarsData, RoverPhoto} from '@/types/Nasa';

/**
 * Custom hook to manage and fetch Mars data.
 * This hook encapsulates the data fetching logic, state management, and side effects related to Mars data.
 *
 * @returns {Object} - Contains accumulated photos, error state, loading state, ref for infinite scroll, modal opener, refetch function, and setter for new search initiation.
 */
export const useMarsData = () => {
  // State to manage the API endpoint
  const [endpoint, setEndpoint] = useState<string>('');

  // State to check if a new search has been initiated
  const [newSearchInitiated, setNewSearchInitiated] = useState<boolean>(false);

  // State to accumulate fetched photos
  const [accumulatedPhotos, setAccumulatedPhotos] = useState<RoverPhoto[]>([]);

  // State to determine if data should be fetched
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  // State to check if more data is available to fetch
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);

  const {
    selectedRover,
    solDate,
    earthDate,
    currentPage,
    setCurrentPage,
    openModal,
    selectedCamera,
  } = useSearchNasa();

  // Query parameters for the API call
  const queryParams = {
    page: currentPage,
  };

  /**
   * Function to load more data when user scrolls to the bottom.
   */
  const loadMoreData = () => {
    if (accumulatedPhotos.length > 0 && !isLoading && !isError && hasMoreData) {
      setCurrentPage(prevPage => prevPage + 1);
      setShouldFetch(true);
    } else {
      setShouldFetch(false); // Ensure no further fetching is attempted
    }
  };

  const loadMoreRef = useInfiniteScroll(loadMoreData, hasMoreData);

  const {data, isLoading, isError, refetch} = useFetchData<MarsData>(
    endpoint,
    queryParams,
    shouldFetch,
    () => setShouldFetch(false),
  );

  /**
   * Effect to handle the accumulation of fetched photos and determine if more data is available.
   */
  useEffect(() => {
    if (data?.photos) {
      setAccumulatedPhotos(prevPhotos => [...prevPhotos, ...data.photos]);
      setShouldFetch(false);
      if (data.photos.length < 24 || data.photos.length === 0) {
        setHasMoreData(false); // Set to false if fetched photos are less than expected or empty
      }
    }
  }, [data]);

  /**
   * Effect to handle the initiation of a new search.
   */
  useEffect(() => {
    if (newSearchInitiated) {
      const newEndpoint = getMarsPhotoEndpoint(
        selectedRover,
        solDate,
        earthDate,
        selectedCamera,
      );
      setCurrentPage(1);
      setEndpoint(newEndpoint);
      setAccumulatedPhotos([]);
      setShouldFetch(true);
      setNewSearchInitiated(false);
    }
  }, [
    newSearchInitiated,
    selectedRover,
    solDate,
    earthDate,
    selectedCamera,
    setCurrentPage,
  ]);

  return {
    accumulatedPhotos,
    isError,
    isLoading,
    loadMoreRef,
    openModal,
    refetch,
    setNewSearchInitiated,
    data,
  };
};
