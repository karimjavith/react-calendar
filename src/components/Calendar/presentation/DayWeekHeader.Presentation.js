import React from "react";
import { NavLink } from 'react-router';
import dateFns from 'date-fns';

const DayWeekHeaderPresentation = ({ selectedDate, currentView, modifyDate }) => {
    const getDateOrWeekDisplay = (viewType) => {
        if (viewType === 'DAY') {
            return dateFns.format(selectedDate, "DD MMMM YYYY");
        }
        return `${dateFns.format(dateFns.startOfWeek(selectedDate), "DD MMM")} - ${dateFns.format(dateFns.endOfWeek(selectedDate), "DD MMM YYYY")}`;
    }
    return (
        <div className="sub-content-container__header row">
            <div className="sub-content-container__header-dateTimeDisplay col-md-8 col-sm-8 col-xs-12">
                <div className="row">
                    <div className="col-md-2">
                        <span>
                            <i onClick={() => modifyDate(dateFns, -1)} className="glyphicon glyphicon-menu-left" />
                        </span>
                        <span>
                            <i onClick={() => modifyDate(dateFns, 1)} className="glyphicon glyphicon-menu-right" />
                        </span>
                    </div>
                    <div className="col-md-10">
                        {getDateOrWeekDisplay(currentView)}
                    </div>
                </div>
            </div>
            <div className="sub-content-container__header-navMenu col-md-4 col-sm-4 col-xs-12">
                <ul className="day-week-calendar-menu-container">
                    <div className="day-calendar-menu-container">
                        <ul className="nav nav-pills">
                            <li className={currentView === 'DAY' ? 'active' : ''}>
                                <NavLink className="" to="/dayCalendar">
                                    Day
                  </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="week-calendar-menu-container">
                        <ul className="nav nav-pills">
                            <li className={currentView === 'WEEK' ? 'active' : ''}>
                                <NavLink className="" to="/weekCalendar">
                                    Week
                  </NavLink>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>{" "}
        </div>
    );
};


export default DayWeekHeaderPresentation;
