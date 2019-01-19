const ERROR_BOUNDARY = {
    THROW_ERROR: "THROW_ERROR"
  };
  export const throwErrorFromBoundary = errorObj => {
    return {
      type: ERROR_BOUNDARY.THROW_ERROR,
      errorObj
    }
  }
  export const initialState = {
    errorBoundary: {
      error: null,
      errorInfo: null
    }
  };
  
  const modal = (state = initialState, action) => {
    switch (action.type) {
      case ERROR_BOUNDARY.THROW_ERROR:
      return {
        ...state,
        errorBoundary: action.errorObj
      }
      default:
        return state;
    }
  };
  export default modal;
  