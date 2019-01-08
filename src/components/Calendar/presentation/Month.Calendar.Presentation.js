import React from "react";
import dateFns from "date-fns";

class CalendarPresentation extends React.Component {
  buildHeader(currentMonth) {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            <span><i className="glyphicon glyphicon-chevron-left"></i></span>
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon"><span><i className="glyphicon glyphicon-chevron-right"></i></span></div>
        </div>
      </div>
    );
  }

  buildDays(currentMonth) {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat).substr(0, 1)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  buildCells(currentMonth, selectedDate) {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
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
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
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
        {this.buildHeader(currentMonth)}
        {this.buildDays(currentMonth)}
        {this.buildCells(currentMonth, selectedDate)}
      </div>
    );
  }
}

export default CalendarPresentation;