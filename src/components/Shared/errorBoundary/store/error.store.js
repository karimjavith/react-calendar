const ERROR_BOUNDARY = {
    THROW_ERROR: "THROW_ERROR"
  };
  export const throwErrorFromBoundary = errorObj => {
    return {
      type: ERROR_BOUNDARY.THROW_ERROR,
      errorObj
    }
  }
 const initialState = {
    errorBoundary: {
      error: null,
      errorInfo: null
    }
  };
  const error = {
    initialState: initialState,
    handlers: {
      [ERROR_BOUNDARY.THROW_ERROR]: (state, action) => {
        return {
          ...state,
          errorBoundary: action.errorObj}
      }
    }
  }
  export default error;
  