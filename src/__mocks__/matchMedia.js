export function mockMatchMedia(shouldMatch, mediaQuery) {
  return (window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: shouldMatch,
      media: mediaQuery,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn()
    };
  }));
}
