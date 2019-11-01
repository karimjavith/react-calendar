import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Events } from "./type";

const events: Events[] = [
  {
    calendarId: 1,
    eventsTitle: "Calendar 1",
    startTime: "09:40",
    endTime: "10:15",
    duration: 45,
    color: "#C13458"
  },
  {
    calendarId: 4,
    eventsTitle: "Calendar 4",
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    calendarId: 5,
    eventsTitle: "Calendar 5",
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    calendarId: 6,
    eventsTitle: "Calendar 6",
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    calendarId: 7,
    eventsTitle: "Calendar 7",
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    calendarId: 8,
    eventsTitle: "Calendar 8",
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    calendarId: 9,
    eventsTitle: "Calendar 9",
    startTime: "09:30",
    endTime: "10:15",
    duration: 45,
    color: "#C13451"
  },
  {
    calendarId: 2,
    eventsTitle: "Calendar 2",
    startTime: "02:40",
    endTime: "04:20",
    duration: 60,
    color: "#612C69"
  },
  {
    calendarId: 3,
    eventsTitle: "Calendar 3",
    startTime: "06:00",
    endTime: "09:40",
    duration: 60,
    color: "#C155D5"
  },
  {
    calendarId: 4,
    eventsTitle: "Calendar 00",
    startTime: "06:20",
    endTime: "12:55",
    duration: 60,
    color: "#C155D5"
  }
];

const props = {
  events,
  isLoading: false,
  selectedDate: new Date()
};
ReactDOM.render(<App {...props} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
