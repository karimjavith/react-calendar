import React from "react";
import Loader from "../../shared/Loader";
import { Rows } from "./Rows";
import { EventWithStyles, DayProps } from "../../../type";
import { Event } from "./Event";

const Day = (props: DayProps) => {
  const [state, setstate] = React.useState<{
    [key: string]: EventWithStyles[];
  }>({});
  const [eventLoadingState, setEventLoadingState] = React.useState(true);
  React.useEffect(() => {
    if (eventLoadingState) {
      let hourCount: { [key: string]: number } = {};
      const updatedEvents = props.events.map(ev => {
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
      setEventLoadingState(false);
    }
  }, [eventLoadingState, props.events, state]);
  return (
    <>
      {props.isLoading && <Loader />}
      {!props.isLoading && <Rows selectedDate={props.selectedDate} />}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0 }}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {!props.isLoading &&
            state.events &&
            state.events.map(event => (
              <Event key={event.startTime + event.eventsTitle} {...event} />
            ))}
        </div>
      </div>
    </>
  );
};
export default Day;
