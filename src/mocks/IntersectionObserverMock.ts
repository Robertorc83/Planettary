class MockIntersectionObserver {
  callback: Function;

  constructor(callback: Function) {
    this.callback = callback;

    // Set the instance so it can be accessed in tests
    (global as any).IntersectionObserverInstance = this;
  }

  observe(element: Element) {
    // store the element or invoke callback directly here, but let's keep it empty for more control in tests
  }

  unobserve(_: Element) {}

  // A method to manually trigger intersection for the tests
  triggerIntersection(entry: IntersectionObserverEntry) {
    this.callback([entry]);
  }
}

(global as any).IntersectionObserver = MockIntersectionObserver;
