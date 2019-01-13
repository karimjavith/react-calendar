import React from "react";
const buildEventCards = (startPoint, endPoint) => {
    const styleElements = {
        top: `${(parseInt(startPoint) + 1) * 40}px`,
        height: `${(parseInt(endPoint) - parseInt(startPoint)) * 40}px`,
        width: '100%'
    };
    return <div style={styleElements} />;
};
const getRows = () => {
    const arr24 = Array(24).fill({});
    const mockCalendar = [
        { "1": "Building notes" }, { "2": "Inspection" }, { "3": "Car Park" }
    ];
    const mockEvents = [
        {
            calendarId: "1",
            eventsTitle: "Building notes",
            startHr: "09",
            endHr: "14"
        },
        {
            calendarId: "3",
            eventsTitle: "Car Park",
            startHr: "02",
            endHr: "18"
        }
    ];
    return (
        <div>
            {arr24.map((v, i) => {
                let hour = i < 10 ? `0` + i++ : i++;
                return (
                    <div className="hour-container-wrapper" key={Math.random(i)}>
                        <div className="hour">{hour}:00</div>
                        <div className="hour-inner">
                            <div className="border-bottom" />
                            {mockEvents.map(e => {
                                return hour == e.startHr && mockCalendar.map((cal) => {
                                     return cal[e.calendarId] === e.eventsTitle && (
                                        <div key={Math.random(i)} className="event-container-wrapper">
                                            <div>
                                                <div className="event-container">
                                                    {buildEventCards(e.startHr, e.endHr)}
                                                </div>
                                            </div>
                                        </div>)
                                });
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

class DayCalendarPresentation extends React.Component {
    componentWillMount() {
        this.props.updateCurrentView("DAY");
    }
    render() {
        return (
            <div className="day-calendar-container">
                <div className="one">{getRows()}</div>
            </div>
        );
    }
}
// const DayCalendarPresentation = ({ updateCurrentView }) => {

//     updateCurrentView('DAY');
//     return (
//         <div className="day-calendar-container">{getRows()}
//         </div>
//     );
// }
export default DayCalendarPresentation;
