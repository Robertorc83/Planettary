import {renderHook, act} from '@testing-library/react';
import useInfiniteScroll from '@/hooks/useInfiniteScrolling';

// Import the mock
import '../../mocks/IntersectionObserverMock';

const waitForNextTick = () => new Promise(resolve => setTimeout(resolve, 0));

describe('useInfiniteScroll', () => {
  it('does not call onVisible callback when there is no more data', async () => {
    const onVisibleMock = jest.fn();

    const {result} = renderHook(() => useInfiniteScroll(onVisibleMock, false));

    act(() => {
      const dummyElement = document.createElement('div');
      result.current.current = dummyElement;
    });

    await waitForNextTick();

    expect(onVisibleMock).not.toHaveBeenCalled();
  });

  //more tests if i had more time
  //calls onVisible callback when observed element becomes visible and has more data
  //does not call onVisible callback when there is no more data
});
