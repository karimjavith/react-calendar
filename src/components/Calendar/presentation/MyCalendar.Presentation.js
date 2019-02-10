import React from "react";
import LoaderPresentation from "../../Shared/Loader.Presentation";
class MyCalendarPresentation extends React.Component {
  componentDidMount() {
    this.props.getCalendarTypeList(new Date(), new Date(), new Date(), new Date());
  }
  render() {
    const { calendarTypes, isLoading, isError } = this.props;
    console.log(this.props);
    return (
      <div className="my-calendar-container">
        <div className="my-calendar-container__header">
          <span>
            <h4>My Calendars</h4>
          </span>
        </div>

        <div className="my-calendar-container__list-container">
          {isLoading && <LoaderPresentation></LoaderPresentation>}
          {!isLoading && !isError && <ul className="my-calendar-container__list row">
            {Object.keys(calendarTypes).map(key => {
              {/* {calendarTypes.map(key => { */ }
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
          </ul>}
        </div>
      </div>
    );
  }
}

export default MyCalendarPresentation;
