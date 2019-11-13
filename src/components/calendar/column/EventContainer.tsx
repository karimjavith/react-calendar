import React from 'react';

type EventContainerProps = {
  hour: string | number;
};

const EventContainer = (props: EventContainerProps) => {
  const { hour } = props;
  return (
    <div
      id={`rdc-${hour.toString()}`}
      className="rdc-container__row__column rdc-container__row__column--right"
    ></div>
  );
};

export default EventContainer;
