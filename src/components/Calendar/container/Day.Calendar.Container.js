import React from "react";
import { connect } from "react-redux";
import { updateCurrentView } from "../store";
import DayCalendarPresentation from "../presentation/Day.Calendar.Presentation";

const mapStateToPropsDayCalendar = state => {
    return {
        currentMonth: state.calendar.currentMonth
    };
};

const mapDispatchToPropsDayCalendar = dispatch => ({
    updateCurrentView: viewType => dispatch(updateCurrentView(viewType))
});
const DayCalendarContainer = connect(
    mapStateToPropsDayCalendar,
    mapDispatchToPropsDayCalendar
)(DayCalendarPresentation);

export default DayCalendarContainer;
