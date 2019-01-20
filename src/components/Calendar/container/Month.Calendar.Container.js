import React from "react";
import { connect } from "react-redux";
import { onDateClick, prevMonth, nextMonth } from "../store";
import MonthCalendarPresentation from "../presentation/Month.Calendar.Presentation";

const mapStateToProps = state => {
  return {
    currentMonth: state.calendar.currentMonth,
    selectedDate: state.calendar.selectedDate
  };
};
const actionCreators =  {
  onDateClick,
  nextMonth,
  prevMonth
};
const MonthCalendarContainer = connect(
  mapStateToProps,
  actionCreators
)(MonthCalendarPresentation);

export default MonthCalendarContainer;
