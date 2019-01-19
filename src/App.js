import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Media from "react-media";
import configureStore from "./redux/store";
import MonthCalendarContainer from "./components/Calendar/container/Month.Calendar.Container";
import DayCalendarContainer from "./components/Calendar/container/Day.Calendar.Container";
import WeekCalendarContainer from "./components/Calendar/container/Week.Calendar.Container";
import DayWeekHeaderContainer from "./components/Calendar/container/DayWeekHeader.Container";
import MyCalendarContainer from "./components/Calendar/container/MyCalendar.Container";
import ErrorBoundaryContainer from "./components/Shared/errorBoundary/ErrorBoundary.Container";
import ModalContainer from "./components/Shared/modal/modal.container";
import "./App.scss";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="main-content container-fluid">
            <div className="main-content-header-container">
              <div className="header-descr">
                <p>Event calendar</p>
              </div>
            </div>
            <div className="main-content-container row">
              <div className="sub-calendar-container col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div className="sub-calendar-container__wrapper row">
                  <div className="sub-calendar-container__month hidden-xs hidden-sm col-md-12 col-lg-12">
                    <MonthCalendarContainer />
                  </div>
                  <div className="sub-calendar-container__mycalendar col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ErrorBoundaryContainer>
                      <MyCalendarContainer />
                    </ErrorBoundaryContainer>
                  </div>
                </div>
              </div>
              <div className="sub-content-container col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <ErrorBoundaryContainer>
                  <DayWeekHeaderContainer />
                </ErrorBoundaryContainer>
                <Media query="(max-width: 599px)">
                  {screenIsSmall =>
                    screenIsSmall ? (
                      // small screen has no redirect
                      <Switch>
                        <Route
                          path="/dayCalendar"
                          render={() => {
                            return (
                              <ErrorBoundaryContainer>
                                <DayCalendarContainer />
                              </ErrorBoundaryContainer>
                            );
                          }}
                        />
                        <Redirect from="/" to="/dayCalendar" />
                      </Switch>
                    ) : (
                        // large screen does!
                        <Switch>
                          <Route
                            path="/dayCalendar"
                            render={() => {
                              return (
                                <ErrorBoundaryContainer>
                                  <DayCalendarContainer />
                                </ErrorBoundaryContainer>
                              );
                            }}
                          />
                          <Route
                            path="/weekCalendar"
                            render={() => {
                              return (
                                <ErrorBoundaryContainer>
                                  <WeekCalendarContainer />
                                </ErrorBoundaryContainer>
                              );
                            }}
                          />
                          <Redirect from="/" to="/dayCalendar" />
                        </Switch>
                      )
                  }
                </Media>
              </div>
            </div>
            <ModalContainer />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
