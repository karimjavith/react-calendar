import { combineReducers } from "redux";
import calendar from "../components/Calendar/store";

export default function createReducer() {
  return combineReducers({
    calendar: calendar
  });
}
