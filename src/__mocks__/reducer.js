export function reducer(state, action) {
  return {
    ...state,
    calendar: {
      isFetching: false
    }
  };
}
