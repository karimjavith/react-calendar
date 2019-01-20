import React from "react";
import { connect } from "react-redux";
import { getCalendarTypeList, toggleMyCalendarViewfn } from "../store";
import MyCalendarPresentation from "../presentation/MyCalendar.Presentation";

const mapStateToPropsMyCalendar = (state) => {
    return {
        calendarTypes: state.calendar.calendarTypes,
        toggleCalendarView: state.calendar.toggleCalendarView

    };
};

const actionCreators =  {
    getCalendarTypeList,
    toggleMyCalendarViewfn
};
const MyCalendarContainer = connect(
    mapStateToPropsMyCalendar,
    actionCreators
)(MyCalendarPresentation);

export default MyCalendarContainer;