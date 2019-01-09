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
  const mapDispatchToPropsWeekCalendar = dispatch => ({
    updateCurrentView: viewType => dispatch(updateCurrentView(viewType))
  });
  const WeekCalendarContainer = connect(
    mapStateToPropsWeekCalendar,
    mapDispatchToPropsWeekCalendar
  )(WeekCalendarPresentation);

export default WeekCalendarContainer;
