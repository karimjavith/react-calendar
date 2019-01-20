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
const initialState = {
  showModal: false,
  modalElement: {
    title: "No title",
    contentHTML: "<span>dummy</span>",
  },
  elementPosition: ""
};

const modal = {
  initialState: initialState,
  handlers: {
    [MODAL_ACTIONS.TOGGLE_MODAL]: (state, action) => {
      return {
        ...state,
        showModal: action.shouldShow,
        modalElement: action.modalElement,
        elementPosition: action.elementPosition
      }
    }
  }
}
export default modal;
