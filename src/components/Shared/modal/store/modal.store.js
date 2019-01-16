const MODAL_ACTIONS = {
    TOGGLE_MODAL: "TOGGLE_MODAL"
  };
  export const toggleModal = (shouldShow, modalElement, elementPosition) => {
    return {
      type: MODAL_ACTIONS.TOGGLE_MODAL,
      shouldShow,
      modalElement,
      elementPosition
    };
  };
  export const initialState = {
      showModal: false,
      modalElement: {
          title: "No title",
          contentHTML: "<span>dummy</span>",
      },
      elementPosition: ""
  };
  
  const modal = (state = initialState, action) => {
    switch (action.type) {
      case MODAL_ACTIONS.TOGGLE_MODAL:
        return {
          ...state,
          showModal: action.shouldShow,
          modalElement: action.modalElement,
          elementPosition: action.elementPosition
        };
      default:
        return state;
    }
  };
  export default modal;
  