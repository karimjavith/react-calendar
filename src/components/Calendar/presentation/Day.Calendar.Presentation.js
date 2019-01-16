import React from "react";
import dateFns from "date-fns";
const buildEventCards = (startPoint, endPoint, toggleFn) => {
  const styleElements = {
    top: `${(parseInt(startPoint) + 1) * 40}px`,
    height: `${(parseInt(endPoint) - parseInt(startPoint)) * 40}px`,
    width: "100%"
  };
  let elmPos = ``;
  let modalHTMLObj = { title: `Event`, contentHTML: `<div>Day calendar - ${startPoint}</div>`, elementPosition: elmPos }
  return <div role="button" ref={e => {elmPos = e && e.getBoundingClientRect()}} onClick={(e) => toggleFn(true, modalHTMLObj, elmPos )} style={styleElements} />;
};

class DayCalendarPresentation extends React.Component {
  componentWillMount() {
    this.props.updateCurrentView("DAY");
  }
  render() {
    const getSameHrContainer = () => {
      const getMin = dateFns.getMinutes(new Date());
      const topPosition = getMin < 30 ? '20px' : '30px'
      return (
        <div style={{ top: topPosition }} className="same-hour-container" />
      );
    }
    const getRows = () => {
      const arr24 = Array(24).fill({});
      const mockCalendar = [
        { "1": "Building notes" },
        { "2": "Inspection" },
        { "3": "Car Park" }
      ];
      const mockEvents = [
        {
          calendarId: "1",
          eventsTitle: "Building notes",
          startHr: "09",
          endHr: "10"
        },
        {
          calendarId: "3",
          eventsTitle: "Car Park",
          startHr: "02",
          endHr: "04"
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
                  {dateFns.isSameDay(this.props.selectedDate, new Date()) &&
                    hour === dateFns.getHours(new Date()) && getSameHrContainer()}
                  {mockEvents.map(e => {
                    return (
                      hour == e.startHr &&
                      mockCalendar.map(cal => {
                        return (
                          cal[e.calendarId] === e.eventsTitle && (
                            <div
                              key={Math.random(i)}
                              className="event-container-wrapper"
                            >
                              <div>
                                <div className="event-container">
                                  {buildEventCards(e.startHr, e.endHr, this.props.toggleModal)}
                                </div>
                              </div>
                            </div>
                          )
                        );
                      })
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
    };
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
