import React from "react";
import dateFns from 'date-fns';

const getHeaderForWeeks = currentMonth => {
    const dateFormat = "DD ddd";
    const arr7 = Array(7).fill({});
  
    let startDate = dateFns.startOfWeek(currentMonth);
  
    return (
      <div className="week-calendar__header row">
        {arr7.map((v, i) => {
          return (
            <div
              className="col week-calendar__header-column"
              key={Math.random(i)}
            >
              {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </div>
          );
        })}
      </div>
    );
  };
  const getRowsForWeeks = () => {
    const arr24 = Array(24).fill({}),
      arr7 = Array(7).fill({});
    return (
      <div>
        {arr24.map((v, i) => {
          let hour = i < 10 ? `0` + i++ : i++;
          return (
            <div className="hour-container-wrapper" key={Math.random(i)}>
              <div>{hour}:00</div>
              <div className="row">
                {arr7.map(() => {
                  return <div className="hour-container__rowCells col"> </div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  const WeekCalendarPresentation = ({ updateCurrentView, currentMonth }) => {
    updateCurrentView("WEEK");
    return (
      <div className="week-calendar-container">
        {getHeaderForWeeks(currentMonth)}
        {getRowsForWeeks()}
      </div>
    );
  };
export default WeekCalendarPresentation;
