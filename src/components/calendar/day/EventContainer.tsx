import React from 'react';
import dateFns from 'date-fns';
import { SameHour } from './SameHour';

type EventContainerProps = {
  hour: string | number;
  selectedDate: string;
};

// eslint-disable-next-line react/display-name
export const EventContainer = (props: EventContainerProps) => {
  const { hour, selectedDate } = props;
  return (
    <div
      id={`rdc-${hour.toString()}`}
      className="rdc-container__row__column rdc-container__row__column--right"
    >
      {dateFns.isSameDay(selectedDate, new Date().toLocaleDateString()) &&
        hour === dateFns.getHours(new Date()) && <SameHour />}
    </div>
  );
};
