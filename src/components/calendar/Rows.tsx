import React from "react";
import EventContainer from "./column/EventContainer";

export const Rows = () => {
  const [arr24] = React.useState(Array(24).fill({}));
  return (
    <>
      {arr24.map((v, i) => {
        const hour = i < 10 ? `0` + i++ : i++;
        return (
          <div className="rdc-container__row" key={hour}>
            <div className="rdc-container__row__column rdc-container__row__column--left">
              {`${hour}:00`}
            </div>
            <EventContainer hour={hour} />
          </div>
        );
      })}
    </>
  );
};
