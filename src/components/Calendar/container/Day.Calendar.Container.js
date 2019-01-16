import React from "react";
import { connect } from "react-redux";
import { updateCurrentView } from "../store";
import { toggleModal } from "../../Shared/modal/store/modal.store";
import DayCalendarPresentation from "../presentation/Day.Calendar.Presentation";

const mapStateToPropsDayCalendar = state => {
  return {
    currentMonth: state.calendar.currentMonth,
    selectedDate: state.calendar.selectedDate
  };
};

const mapDispatchToPropsDayCalendar = dispatch => ({
  updateCurrentView: viewType => dispatch(updateCurrentView(viewType)),
  toggleModal: (shouldShow, modalElement, elementPosition) => dispatch(toggleModal(shouldShow, modalElement, elementPosition))
});
const DayCalendarContainer = connect(
  mapStateToPropsDayCalendar,
  mapDispatchToPropsDayCalendar
)(DayCalendarPresentation);

export default DayCalendarContainer;
