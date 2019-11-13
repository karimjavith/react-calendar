import React from 'react';
import { EventWithStyles, RDCContextType } from '../../../type';
import { RDCContext } from '../../..';

export const Event = (props: EventWithStyles) => {
  const { onEventClickCb } = React.useContext<RDCContextType>(RDCContext);
  const width = `calc((100% - ${props.left + 16}px)/${props.order})`;
  const styleElements = {
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    background: '#333335',
    color: '#fff',
    width,
    zIndex: 999 + props.order,
    top: props.top,
    left: `${props.order * props.left}px`,
    marginRight: '1rem'
  };
  return (
    <div
      style={styleElements}
      role="button"
      className="rdc-container__row__column__event"
      onClick={() => {
        onEventClickCb({ ...props });
      }}
    >
      <div className="rdc-container__row__column__event__content">
        <div className="rdc-container__row__column__event__container__title">
          {props.eventsTitle}
        </div>

        <div className="rdc-container__row__column__event__container__body">{`${props.startTime} - ${props.endTime} Hrs`}</div>
      </div>
    </div>
  );
};
