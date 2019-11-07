import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RDC from "./RDC";
import * as serviceWorker from "./serviceWorker";
import { Events, RDCRootProps } from "./type";

const addDays = (date: string | Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const events: Events[] = [
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 1",
    eventDate: new Date(),
    startTime: "09:40",
    endTime: "10:15",
    duration: 45,
    color: "#C13458"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 4",
    eventDate: new Date(),
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 5",
    eventDate: new Date(),
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 6",
    eventDate: new Date(),
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 7",
    eventDate: new Date(),
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 8",
    eventDate: new Date(),
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 9",
    eventDate: new Date(),
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 2",
    eventDate: new Date(),
    startTime: "02:40",
    endTime: "04:20",
    duration: 60,
    color: "#612C69"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 3",
    eventDate: new Date(),
    startTime: "06:00",
    endTime: "09:40",
    duration: 60,
    color: "#C155D5"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 00",
    eventDate: new Date(),
    startTime: "06:20",
    endTime: "12:55",
    duration: 60,
    color: "#C155D5"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 11",
    eventDate: addDays(new Date(), 3),
    startTime: "06:20",
    endTime: "12:55",
    duration: 60,
    color: "#C155D5"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 11",
    eventDate: addDays(new Date(), 2),
    startTime: "06:20",
    endTime: "12:55",
    duration: 60,
    color: "#C155D5"
  },
  {
    eventId: Math.random(),
    eventsTitle: "Calendar 11",
    eventDate: addDays(new Date(), 2),
    startTime: "06:20",
    endTime: "12:55",
    duration: 60,
    color: "#C155D5"
  }
];
const props: RDCRootProps = {
  events,
  isLoading: false,
  selectedDate: new Date(),
  systemDate: new Date()
};
export const RDCContext = React.createContext<{ [key: string]: string | Date }>(
  {
    systemDate: new Date() // default value
  }
);
ReactDOM.render(
  <RDCContext.Provider value={{ systemDate: props.systemDate }}>
    <RDC {...props} />
  </RDCContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
