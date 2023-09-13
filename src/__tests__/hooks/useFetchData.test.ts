import {renderHook} from '@testing-library/react';
import {useQuery} from '@tanstack/react-query';
import useFetchData from '@/hooks/useFetchData'; // Update this path

// Mocking axios
jest.mock('axios');

// Mocking useQuery from React Query
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

describe('useFetchData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns loading state initially', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });
    const {result} = renderHook(() => useFetchData('test-endpoint', {}, true));
    expect(result.current.isLoading).toBeTruthy();
  });

  it('returns data after a successful fetch', async () => {
    const mockData = {data: 'test-data'};
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });
    const {result} = renderHook(() => useFetchData('test-endpoint', {}, true));
    expect(result.current.data).toEqual(mockData);
  });

  it('returns error on fetch failure', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      isError: true,
      error: new Error('Fetch Error'),
    });
    const {result} = renderHook(() => useFetchData('test-endpoint', {}, true));
    expect(result.current.isError).toBeTruthy();
    expect(result.current.error).toEqual('Fetch Error');
  });

  it('calls onSuccessCallback when fetch is successful', () => {
    const mockCallback = jest.fn();

    (useQuery as jest.Mock).mockImplementation((_, __, config) => {
      // Simulate calling onSuccess if isSuccess is true
      if (config.onSuccess) {
        config.onSuccess();
      }

      return {
        data: {},
        isSuccess: true,
        isLoading: false,
        isError: false,
      };
    });

    renderHook(() => useFetchData('test-endpoint', {}, true, mockCallback));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
