import React from 'react';
import dateFns from 'date-fns';
import { Row, Col, Container } from 'react-bootstrap';
import { SameHour } from './SameHour';
import { Event } from './Event';

interface IRowsProps {
  selectedDate: any;
  events: any[];
}

export const Rows = (props: IRowsProps) => {
  const arr24 = Array(24).fill({});
  return (
    <Container fluid>
      <>
        {arr24.map((v, i) => {
          let hour = i < 10 ? `0` + i++ : i++;
          let hourEvent = props.events.filter(
            x => hour === x.startTime.slice(0, 2)
          );
          return (
            <Row key={i} style={{ height: '3rem' }}>
              <Col
                xs={2}
                sm={1}
                md={2}
                lg={1}
                className="day-hour"
                style={{ marginTop: '1rem' }}
              >
                {`${hour}:00`}
              </Col>
              <Col
                xs={10}
                sm={11}
                md={10}
                lg={11}
                className="time-border-bottom"
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
              </Col>
            </Row>
          );
        })}
      </>
    </Container>
  );
};
