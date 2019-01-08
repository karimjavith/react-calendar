import React from "react";
import { connect } from "react-redux";
// import { onDateClick, prevMonth, nextMonth } from "../store";
import WeekCalendarPresentation from "../presentation/Week.Calendar.Presentation";

const mapStateToProps = state => {
  return {
    currentMonth: state.calendar.currentMonth,
    selectedDate: state.calendar.selectedDate
  };
};

const WeekCalendarContainer = connect(
  mapStateToProps
)(WeekCalendarPresentation);

export default WeekCalendarContainer;
