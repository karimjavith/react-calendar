import React from "react";
import { connect } from "react-redux";
import { updateCurrentView } from "../store";
import { toggleModal } from "../../Shared/modal/store/modal.store";
import DayCalendarPresentation from "../presentation/Day.Calendar.Presentation";

const mapStateToPropsDayCalendar = state => {
  return {
    currentMonth: state.calendar.currentMonth,
    selectedDate: state.calendar.selectedDate,
    isLoading: state.calendar.isFetching,
    isError: state.calendar.isError
  };
};

const actionCreators = {
  toggleModal,
  updateCurrentView
}
const DayCalendarContainer = connect(
  mapStateToPropsDayCalendar,
  actionCreators
)(DayCalendarPresentation);

export default DayCalendarContainer;
