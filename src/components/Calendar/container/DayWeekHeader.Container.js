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

const actionCreators =  {
    modifyDate
};

const DayWeekHeaderContainer = connect(
    mapStateToPropsForDayWeekHeader,
    actionCreators
)(DayCalendarPresentation);

export default DayWeekHeaderContainer;
