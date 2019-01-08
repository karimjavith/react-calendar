import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import configureStore from "./redux/store";
import MonthCalendarContainer from "./components/Calendar/container/Month.Calendar.Container";
import DayCalendarContainer from "./components/Calendar/container/Day.Calendar.Container";
import WeekCalendarContainer from './components/Calendar/container/Week.Calendar.Container';
import dateFns from "date-fns";
import "./App.css";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="main-content">
            <div className="main-content-container">
              <div className="month-calendar-container">
                <MonthCalendarContainer />
              </div>
              <div className="sub-content-container">
                <div className="sub-content-container__header">
                  <div className="sub-content-container__header-dateTimeDisplay">
                    <span>{dateFns.format(new Date(), "DD MMMM YYYY")}</span>
                  </div>
                  <div className="sub-content-container__header-navMenu">
                    <ul className="day-week-calendar-menu-container">
                      <div className="day-calendar-menu-container">
                        <li className="menu__item">
                          <NavLink className="menu__link" to="/dayCalendar">
                            Day
                          </NavLink>
                        </li>
                      </div>
                      <div className="week-calendar-menu-container">
                        <li className="menu__item">
                          <NavLink className="menu__link" to="/weekCalendar">
                            Week
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>

                <Switch>
                  <Route path="/dayCalendar" component={DayCalendarContainer} />
                  <Route path="/weekCalendar" component={WeekCalendarContainer} />
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
