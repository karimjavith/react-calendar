import { combineReducers } from "redux";
import calendar from "../components/Calendar/store";
import modal from '../components/Shared/modal/store/modal.store';

export default function createReducer() {
  return combineReducers({
    calendar: calendar,
    modal: modal
  });
}
