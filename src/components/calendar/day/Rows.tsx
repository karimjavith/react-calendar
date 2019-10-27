import React from 'react';
import dateFns from 'date-fns';
import { SameHour } from './SameHour';
import { Event } from './Event';

type RowsProps = {
  selectedDate: any;
  events: any[];
};

export const Rows = (props: RowsProps) => {
  const arr24 = Array(24).fill({});
  return (
    <>
      {arr24.map((v, i) => {
        let hour = i < 10 ? `0` + i++ : i++;
        let hourEvent = props.events.filter(
          x => hour === x.startTime.slice(0, 2)
        );
        return (
          <div
            className="rdc-container__row"
            key={i}
            style={{ height: '3rem' }}
          >
            <div
              className="rdc-container__row__column rdc-container__row__column--left"
              style={{ marginTop: '1rem' }}
            >
              {`${hour}:00`}
            </div>
            <div
              className="rdc-container__row__column rdc-container__row__column--right"
              style={{ display: 'flex' }}
            >
              {dateFns.isSameDay(props.selectedDate, new Date()) &&
                hour === dateFns.getHours(new Date()) && <SameHour />}
              {hourEvent &&
                hourEvent.map((e, i) => {
                  return (
                    <React.Fragment key={e.calendarId}>
                      <Event
                        width={`calc(100% / ${hourEvent.length})`}
                        details={e}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        );
      })}
    </>
  );
};
