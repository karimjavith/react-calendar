import React from "react";
import { Events, EventWithStyles } from "../../../type";

type EventProps = {
  item: Events;
};

export const Event = (props: EventWithStyles) => {
  const width = `calc((100% - ${props.left + 16}px)/${props.order})`;
  const styleElements = {
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    background: "#000",
    color: "#fff",
    width,
    zIndex: 999 + props.order,
    top: props.top,
    left: props.left * props.order,
    marginRight: "1rem",
  };
  return (
    <div style={styleElements} className="rdc-container__row__column__event">
      <div className="rdc-container__row__column__event__content">
        <div className="rdc-container__row__column__event__container__title">
          {props.eventsTitle}
        </div>

        <div className="rdc-container__row__column__event__container__body">{`${props.startTime} - ${props.endTime} Hrs`}</div>
      </div>
    </div>
  );
};
