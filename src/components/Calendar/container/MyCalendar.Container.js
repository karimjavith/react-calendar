import React from "react";
import { connect } from "react-redux";
import { onDateClick, prevMonth, nextMonth } from "../store";
import MyCalendarPresentation from "../presentation/MyCalendar.Presentation"; 

const mapStateToPropsMyCalendar = state => {
    return {
        calendarTypes: state.calendar.calendarTypes
    };
};
const mapDispatchToPropsMyCalendar = dispatch => ({
    getCalendarTypeList: () => dispatch(getCalendarTypeList())

});
const MyCalendarContainer = connect(
    mapStateToPropsMyCalendar,
    mapDispatchToPropsMyCalendar
)(MyCalendarPresentation);
