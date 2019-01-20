import { combineReducers } from "redux";
import calendar from "../components/Calendar/store";
import modal from '../components/Shared/modal/store/modal.store';

function getReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}
export default function createReducer() {
  return combineReducers({
    calendar: getReducer(calendar.initialState, calendar.handlers),
    modal: getReducer(modal.initialState, modal.handlers)
  });
}
