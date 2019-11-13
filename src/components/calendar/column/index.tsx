import React from 'react';
import dateFns from 'date-fns';
import { EventWithStyles, DayProps } from '../../../type';
import { Event } from './Event';
import Header from './Header';
import { SameHour } from './SameHour';
import { RDCContext } from '../../..';

type DayState = {
  event: EventWithStyles[];
  eventLoading: boolean;
  selectedDate: string | Date;
};

const Column = (props: DayProps) => {
  const { systemDate } = React.useContext(RDCContext);
  const [state, setstate] = React.useState<DayState>({
    event: [],
    eventLoading: true,
    selectedDate: props.selectedDate
  });
  const changeDate = (by: number) => {
    setstate({
      ...state,
      selectedDate:
        by !== 0 ? dateFns.addDays(state.selectedDate, by) : props.selectedDate,
      eventLoading: true
    });
  };
  const currentDayEvents = React.useMemo(
    () =>
      props.events.filter(ev =>
        dateFns.isSameDay(state.selectedDate, ev.eventDate)
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.selectedDate]
  );
  React.useEffect(() => {
    if (state.eventLoading) {
      let hourCount: { [key: string]: number } = {};

      const updatedEvents = currentDayEvents
        .map(ev => {
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
        })
        .sort((current, next) => next.order - current.order);
      setstate({
        ...state,
        event: updatedEvents,
        eventLoading: false
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.eventLoading]);
  return (
    <>
      <Header selectedDate={state.selectedDate} changeDate={changeDate} />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0 }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%'
          }}
        >
          {dateFns.isSameDay(state.selectedDate, systemDate) && <SameHour />}
          {!state.eventLoading &&
            state.event.length > 0 &&
            state.event.map(event => <Event key={event.eventId} {...event} />)}
        </div>
      </div>
    </>
  );
};
export default Column;
