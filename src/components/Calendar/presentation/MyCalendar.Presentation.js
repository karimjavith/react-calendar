import React from "react";
import LoaderPresentation from "../shared/Loader.Presentation";
class MyCalendarPresentation extends React.Component {
  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth < 1200) {
          this.props.toggleMyCalendarViewfn();
        }
      },
      false
    );

    this.props.toggleMyCalendarViewfn();
    this.props.getCalendarTypeList();
  }
  render() {
    const { calendarTypes, toggleCalendarView } = this.props;
    return (
      <div className="my-calendar-container">
        <div className="my-calendar-container__header">
          <span>
            <h4>My Calendars</h4>
          </span>
          <span onClick={() => this.props.toggleMyCalendarViewfn()} className="hidden-md hidden-lg">
            <i className="glyphicon glyphicon-menu-down" />
          </span>
        </div>
        {toggleCalendarView && (
          <div className="my-calendar-container__list-container">
            {/* <LoaderPresentation /> */}
            <ul className="my-calendar-container__list row">
              {Object.keys(calendarTypes).map(key => {
                // {calendarTypes.map(key => {
                return (
                  <li key={Math.random(key)}>

                    <div className="checkbox-containercol-sm-12 col-md-12">
                      <label className="custom-control-checkbox-container">
                        <input
                          className="mycalendar-checkbox-input custom-control-input"
                          type="checkbox"
                          id="checkbox-calendar-type1"
                          aria-label="checkbox for calendar types"
                        />
                        <span className="custom-control-indicator" />
                        <span
                          className="mycalendar-checkbox-label custom-control-description"
                          htmlFor="checkbox-calendar-type1"
                        >
                          {calendarTypes[key]}
                        </span>
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default MyCalendarPresentation;
