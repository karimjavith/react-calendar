import React from "react";
import { connect } from "react-redux";
import { updateCurrentView } from "../store";
import WeekCalendarPresentation from "../presentation/Week.Calendar.Presentation";
const mapStateToPropsWeekCalendar = state => {
  return {
    currentMonth: state.calendar.currentMonth,
    selectedDate: state.calendar.selectedDate
  };
};

const actionCreators = {
  updateCurrentView
};
const WeekCalendarContainer = connect(
  mapStateToPropsWeekCalendar,
  actionCreators
)(WeekCalendarPresentation);

export default WeekCalendarContainer;
