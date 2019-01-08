import React from "react";

const getRows = () => {
    const arr24 = Array(24).fill({});
    return (
        <div>
            {arr24.map((v, i) => {
                let hour = i < 10 ? `0` + i++ : i++;
                return <div key={Math.random(i)}><div>{hour}:00</div><div className="hour-container"></div></div>
            })}
        </div>
    );
};

const WeekCalendarPresentation = () => {
    return (
        <div className="week-calendar-container">
            {getRows()}
        </div>
    );
}

export default WeekCalendarPresentation;
