import React from "react";
import dateFns from "date-fns";
import Loader from "../../shared/Loader";
import { Rows } from "./Rows";
import { EventWithStyles, DayProps } from "../../../type";
import { Event } from "./Event";

type DayState = {
  event: EventWithStyles[];
  eventLoading: boolean;
  selectedDate: string | Date;
};

const Day = (props: DayProps) => {
  const [state, setstate] = React.useState<DayState>({
    event: [],
    eventLoading: true,
    selectedDate: props.selectedDate
  });
  const currentDayEvents = React.useMemo(
    () =>
      props.events.filter(ev =>
        dateFns.isSameDay(props.selectedDate, ev.eventDate)
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.selectedDate]
  );
  React.useEffect(() => {
    if (state.eventLoading || props.selectedDate !== state.selectedDate) {
      let hourCount: { [key: string]: number } = {};

      const updatedEvents = currentDayEvents.map(ev => {
        const hour = ev.startTime.slice(0, 2);
        const elm = document.getElementById(`rdc-${hour}`);
        hourCount = {
          ...hourCount,
          [hour]: hourCount[hour] ? hourCount[hour] + 1 : 1
        };
        return {
          ...ev,
          top: elm && elm.offsetTop,
          left: elm && elm.offsetLeft,
          order: hourCount[hour]
        };
      });
      setstate({
        ...state,
        event: updatedEvents,
        selectedDate: props.selectedDate,
        eventLoading: false
      });
    }
  }, [currentDayEvents, props.events, props.selectedDate, state]);
  return (
    <>
      {state.eventLoading && <Loader />}
      <Rows selectedDate={props.selectedDate} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 0 }}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {!state.eventLoading &&
            state.event.length > 0 &&
            state.event.map(event => <Event key={event.eventId} {...event} />)}
        </div>
      </div>
    </>
  );
};
export default Day;
