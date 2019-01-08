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
const mapDispatchToProps = dispatch => ({
  onDateClick: day => dispatch(onDateClick(day)),
  nextMonth: dateFns => dispatch(nextMonth(dateFns)),
  prevMonth: dateFns => dispatch(prevMonth(dateFns))
});

const MonthCalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthCalendarPresentation);

export default MonthCalendarContainer;
