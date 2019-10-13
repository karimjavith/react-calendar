import React from 'react';
import dateFns from 'date-fns';
import { ListGroup, Button, Container } from 'react-bootstrap';
type DayWeekHeader = {
  selectedDate: any;
  changeDate: (by: number) => void;
};
const DayWeekHeader = (props: DayWeekHeader) => {
  const title = `${dateFns.format(props.selectedDate, 'DD MMM YYYY')}`;
  return (
    <Container fluid className="dayWeekHeader">
      <div>
        <Button block variant="success" onClick={() => props.changeDate(0)}>
          Today
        </Button>
      </div>
      <div>
        <ListGroup.Item
          role="button"
          style={{ cursor: 'pointer' }}
          onClick={() => props.changeDate(-1)}
        >
          <i className="icon ion-md-arrow-dropleft" />
        </ListGroup.Item>
        <ListGroup.Item>{title}</ListGroup.Item>
        <ListGroup.Item
          role="button"
          style={{ cursor: 'pointer' }}
          onClick={() => props.changeDate(1)}
        >
          <i className="icon ion-md-arrow-dropright" />
        </ListGroup.Item>
      </div>
    </Container>
  );
};

export default DayWeekHeader;
