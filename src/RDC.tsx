/* eslint-disable react/prop-types */
import React, { useState } from "react";
import dateFns from "date-fns";
import DayWeekHeader from "./components/calendar/DayWeekHeader";
import Day from "./components/calendar/day/index";
import "./App.scss";
import { RDCProps } from "./type";

const RDC = (props: RDCProps) => {
  const initialState = {
    selectedDate: props.selectedDate
  };
  const [state, setstate] = useState(initialState);
  const changeDate = (by: number) => {
    setstate({
      ...state,
      selectedDate:
        by !== 0 ? dateFns.addDays(state.selectedDate, by) : props.selectedDate
    });
  };
  return (
    <div className="rdc-container">
      <DayWeekHeader
        selectedDate={state.selectedDate}
        changeDate={changeDate}
      />
      <Day events={props.events} selectedDate={state.selectedDate} />
    </div>
  );
};
RDC.displayName = "React Day Calendar";
export default RDC;
