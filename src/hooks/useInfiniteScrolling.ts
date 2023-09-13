import {useRef, useEffect} from 'react';

/**
 * Custom hook to handle infinite scrolling using Intersection Observer.
 *
 * @param {Function} onVisible - Callback function to be triggered when the observed element becomes visible.
 * @param {Object} options - IntersectionObserver options.
 * @returns {Object} - A React ref to be attached to the element to be observed.
 */
const useInfiniteScroll = (
  onVisible: () => void,
  hasMoreData: boolean,
  options: IntersectionObserverInit = {threshold: 1},
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (currentElement) {
      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMoreData) {
          onVisible();
        } else if (!hasMoreData && observerRef.current) {
          observerRef.current.unobserve(currentElement as Element);
        }
      }, options);

      observerRef.current.observe(currentElement);
    }

    return () => {
      if (observerRef.current && currentElement) {
        observerRef.current.unobserve(currentElement as Element);
      }
    };
  }, [onVisible, options, hasMoreData]);

  return elementRef;
};

export default useInfiniteScroll;
