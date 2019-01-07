import React from "react";
import { connect } from "react-redux";
import { onDateClick, prevMonth, nextMonth } from "../store";
import CalendarPresentation from '../presentation/CalendarPresentation';

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

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarPresentation);

export default CalendarContainer;
