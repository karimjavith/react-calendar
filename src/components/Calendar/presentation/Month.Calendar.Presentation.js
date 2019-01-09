import React from "react";
import dateFns from "date-fns";
class CalendarPresentation extends React.Component {
  buildMonthHeader(currentMonth) {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            <span>
              <i className="glyphicon glyphicon-chevron-left" />
            </span>
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">
            <span>
              <i className="glyphicon glyphicon-chevron-right" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  buildWeekHeaders(currentMonth) {
    const dateFormat = "dddd";
    const arr7 = Array(7).fill({});

    let startDate = dateFns.startOfWeek(currentMonth);

    return (
      <div className="days row">
        {arr7.map((v, i) => {
          return (
            <div className="col col-center" key={Math.random(i)}>
              {dateFns
                .format(dateFns.addDays(startDate, i), dateFormat)
                .substr(0, 1)}
            </div>
          );
        })}
      </div>
    );
  }

  buildWeekRows(currentMonth, selectedDate) {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D",
      rows = [];

    let days,
      day = startDate,
      formattedDate = "",
      arr7 = Array(7).fill({});

    while (day <= endDate) {
      days = arr7.map(() => {
        day = dateFns.addDays(day, 1);
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        return (
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                  ? "selected"
                  : ""
              }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number" data-formatted={formattedDate}>
              {formattedDate}
            </span>
          </div>
        );
      });
      rows.push(
        <div className="row" key={Math.random(day)}>
          {days}
        </div>
      );
      arr7 = Array(7).fill({});
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.props.onDateClick(day);
  };

  nextMonth = () => {
    this.props.nextMonth(dateFns);
  };

  prevMonth = () => {
    this.props.prevMonth(dateFns);
  };

  render() {
    const { currentMonth, selectedDate } = this.props;
    return (
      <div className="calendar">
        {this.buildMonthHeader(currentMonth)}
        {this.buildWeekHeaders(currentMonth)}
        {this.buildWeekRows(currentMonth, selectedDate)}
      </div>
    );
  }
}

export default CalendarPresentation;
