import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import configureStore from "./redux/store";
import MonthCalendarContainer from "./components/Calendar/container/Month.Calendar.Container";
import DayCalendarContainer from "./components/Calendar/container/Day.Calendar.Container";
import WeekCalendarContainer from "./components/Calendar/container/Week.Calendar.Container";
import dateFns from "date-fns";
import "./App.css";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
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
                <div className="sub-content-container__header row">
                  <div className="sub-content-container__header-dateTimeDisplay col-md-8 col-sm-8 col-xs-12">
                    <div className="row">
                      <div className="col-md-2">
                        <span>
                          <i className="glyphicon glyphicon-menu-left" />
                        </span>
                        <span>
                          <i className="glyphicon glyphicon-menu-right" />
                        </span>
                      </div>
                      <div className="col-md-10">
                        {dateFns.format(new Date(), "DD MMMM YYYY")}
                      </div>
                    </div>
                  </div>
                  <div className="sub-content-container__header-navMenu col-md-4 col-sm-4 col-xs-12">
                    <ul className="day-week-calendar-menu-container">
                      <div className="day-calendar-menu-container">
                        <ul className="nav nav-pills"><li>
                          <NavLink className="" to="/dayCalendar">
                            Day
                          </NavLink>
                        </li></ul>
                      </div>
                      <div className="week-calendar-menu-container">
                        <ul className="nav nav-pills"><li className="">
                          <NavLink className="" to="/weekCalendar">
                            Week
                          </NavLink>
                        </li></ul>
                      </div>
                    </ul>
                  </div>
                </div>

                <Switch>
                  <Route path="/dayCalendar" component={DayCalendarContainer} />
                  <Route
                    path="/weekCalendar"
                    component={WeekCalendarContainer}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
