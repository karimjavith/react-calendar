import React from "react";
import dateFns from "date-fns";
import Loader from "../../shared/Loader";
import { Rows } from "./Rows";
import { EventWithStyles, DayProps } from "../../../type";
import { Event } from "./Event";

const Day = (props: DayProps) => {
  const [state, setstate] = React.useState<{
    [key: string]: EventWithStyles[];
  }>({});
  const [eventLoadingState, setEventLoadingState] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(props.selectedDate);

  React.useEffect(() => {
    if (eventLoadingState || props.selectedDate !== selectedDate) {
      let hourCount: { [key: string]: number } = {};
      const currentDayEvents = props.events.filter(ev =>
        dateFns.isSameDay(props.selectedDate, ev.eventDate)
      );

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
      setstate({ ...state, events: updatedEvents });
      setSelectedDate(props.selectedDate);
      setEventLoadingState(false);
    }
  }, [
    eventLoadingState,
    props.events,
    props.selectedDate,
    selectedDate,
    state
  ]);
  return (
    <>
      {eventLoadingState && <Loader />}
      <Rows selectedDate={props.selectedDate} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 0 }}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {!eventLoadingState &&
            state.events.length > 0 &&
            state.events.map(event => <Event key={event.eventId} {...event} />)}
        </div>
      </div>
    </>
  );
};
export default Day;
