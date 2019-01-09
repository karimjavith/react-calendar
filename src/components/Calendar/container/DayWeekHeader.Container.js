import React from "react";
import { connect } from "react-redux";
import { modifyDate } from "../store";
import DayCalendarPresentation from "../presentation/DayWeekHeader.Presentation";

const mapStateToPropsForDayWeekHeader = state => {
    return {
        selectedDate: state.calendar.selectedDate,
        currentView: state.calendar.currentView
    };
};

const mapDispatchToPropsDayWeekHeader = dispatch => ({
    modifyDate: (dateFns, count) => dispatch(modifyDate(dateFns, count))
});

const DayWeekHeaderContainer = connect(
    mapStateToPropsForDayWeekHeader,
    mapDispatchToPropsDayWeekHeader
)(DayCalendarPresentation);

export default DayWeekHeaderContainer;
