import React from "react";
import { connect } from "react-redux";
// import { onDateClick, prevMonth, nextMonth } from "../store";
import DayCalendarPresentation from "../presentation/Day.Calendar.Presentation";

const mapStateToProps = state => {
  return {
    currentMonth: state.calendar.currentMonth,
    selectedDate: state.calendar.selectedDate
  };
};

const DayCalendarContainer = connect(
  mapStateToProps
)(DayCalendarPresentation);

export default DayCalendarContainer;
