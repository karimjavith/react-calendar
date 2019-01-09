import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import configureStore from "./redux/store";
import MonthCalendarContainer from "./components/Calendar/container/Month.Calendar.Container";
import DayCalendarContainer from "./components/Calendar/container/Day.Calendar.Container";
import WeekCalendarContainer from "./components/Calendar/container/Week.Calendar.Container";
import DayWeekHeaderContainer from "./components/Calendar/container/DayWeekHeader.Container";
import "./App.css";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="main-content container-fluid">
            <div className="main-content-container row">
              <div className="sub-calendar-container  col-md-3">
                <div className="sub-calendar-container__wrapper row">
                  <div className="sub-calendar-container__month col-md-12">
                    <MonthCalendarContainer />
                  </div>
                </div>
              </div>
              <div className="sub-content-container col-md-9">
                <DayWeekHeaderContainer />
                <Switch>
                  <Route path="/dayCalendar" component={DayCalendarContainer} />
                  <Route
                    path="/weekCalendar"
                    component={WeekCalendarContainer}
                  />
                  <Redirect from="/" to="/dayCalendar"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
