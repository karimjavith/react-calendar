/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import dateFns from 'date-fns';
import DayWeekHeader from './components/calendar/DayWeekHeader';
import Day from './components/calendar/day/index';
import './App.scss';
import { Events } from './type';
type AppProps = {
  selectedDate: string;
  events: Events[];
  isLoading: boolean;
};
const App = (props: AppProps) => {
  const initialState = {
    selectedDate: props.selectedDate
  };
  const [state, setstate] = useState(initialState);
  const changeDate = (by: number) => {
    setstate({
      ...state,
      selectedDate:
        by !== 0
          ? dateFns.addDays(state.selectedDate, by).toLocaleDateString()
          : props.selectedDate
    });
  };
  return (
    <div className="rdc-container">
      <DayWeekHeader
        selectedDate={state.selectedDate}
        changeDate={changeDate}
      />
      <Day
        events={props.events}
        isLoading={props.isLoading}
        selectedDate={state.selectedDate}
      />
    </div>
  );
};
App.displayName = 'Day Calendar';
export default App;
