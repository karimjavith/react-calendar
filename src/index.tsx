import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RDC from './RDC';
import * as serviceWorker from './serviceWorker';
import { TEvent, RDCRootProps, RDCContextType } from './type';

const addDays = (date: string | Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const events: TEvent[] = [
  {
    eventId: 1001,
    eventsTitle: 'Calendar 1',
    eventDate: new Date(),
    startTime: '09:40',
    endTime: '10:15',
    duration: 45,
    color: '#C13458'
  },
  {
    eventId: 1002,
    eventsTitle: 'Calendar 4',
    eventDate: new Date(),
    startTime: '09:30',
    endTime: '10:15',
    duration: 45,
    color: '#C13451'
  },
  {
    eventId: 1003,
    eventsTitle: 'Calendar 5',
    eventDate: new Date(),
    startTime: '09:30',
    endTime: '10:15',
    duration: 45,
    color: '#C13451'
  },
  {
    eventId: 1004,
    eventsTitle: 'Calendar 6',
    eventDate: new Date(),
    startTime: '09:30',
    endTime: '10:15',
    duration: 45,
    color: '#C13451'
  },
  {
    eventId: 1005,
    eventsTitle: 'Calendar 7',
    eventDate: new Date(),
    startTime: '09:30',
    endTime: '10:15',
    duration: 45,
    color: '#C13451'
  }
];
const completeEvents = [...events];
for (let i = 1; i <= 1000; i++) {
  completeEvents.push({
    ...completeEvents.slice(-1)[0],
    eventId: completeEvents.slice(-1)[0].eventId + i,
    eventDate: addDays(new Date(), i / 10),
    eventsTitle: 'Event ' + completeEvents.slice(-1)[0].eventId + i
  });
}
// console.log(completeEvents);
const props: RDCRootProps = {
  events: completeEvents,
  isLoading: false,
  selectedDate: new Date(),
  systemDate: new Date(),
  onEventClickCb: (events: TEvent) => {
    console.log(events);
  }
};
export const RDCContext = React.createContext<RDCContextType>(null);
const RDCContainer = (props: RDCRootProps) => {
  const memoisedContextValue = React.useMemo(() => {
    return {
      systemDate: props.systemDate,
      onEventClickCb: props.onEventClickCb
    };
  }, [props.onEventClickCb, props.systemDate]);
  return (
    <RDCContext.Provider value={memoisedContextValue}>
      <RDC {...props} />
    </RDCContext.Provider>
  );
};
ReactDOM.render(<RDCContainer {...props} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
