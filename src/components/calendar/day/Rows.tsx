import React from "react";
import { EventContainer } from "./EventContainer";

type RowsProps = {
  selectedDate: any;
};
export const Rows = (props: RowsProps) => {
  const arr24 = Array(24).fill({});
  return (
    <>
      {arr24.map((v, i) => {
        const hour = i < 10 ? `0` + i++ : i++;
        return (
          <div className="rdc-container__row" key={i}>
            <div className="rdc-container__row__column rdc-container__row__column--left">
              {`${hour}:00`}
            </div>
            <EventContainer hour={hour} selectedDate={props.selectedDate} />
          </div>
        );
      })}
    </>
  );
};
