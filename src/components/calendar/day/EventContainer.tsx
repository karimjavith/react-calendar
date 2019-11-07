import React from "react";
import dateFns from "date-fns";
import { SameHour } from "./SameHour";
import { RDCContext } from "../../..";

type EventContainerProps = {
  hour: string | number;
  selectedDate: string | Date;
};

// eslint-disable-next-line react/display-name
export const EventContainer = (props: EventContainerProps) => {
  const { hour, selectedDate } = props;
  const { systemDate } = React.useContext(RDCContext);
  return (
    <div
      id={`rdc-${hour.toString()}`}
      className="rdc-container__row__column rdc-container__row__column--right"
    >
      {dateFns.isSameDay(selectedDate, systemDate) &&
        hour === dateFns.getHours(systemDate) && <SameHour />}
    </div>
  );
};
