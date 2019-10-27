import React, { useState } from 'react';
const initialState = {
  open: false
};

type EventProps = {
  width: string | number;
  details: any;
};

export const Event = ({ details, width }: EventProps) => {
  const [state, setstate] = useState(initialState);
  const startPoint = details.startTime.replace(':', '.');
  const endPoint = details.endTime.replace(':', '.');
  const styleElements = {
    top:
      parseInt(details.startTime.slice(3), 10) === 0o0
        ? '1.8rem'
        : parseInt(details.startTime.slice(3), 10) < 30
        ? `2.6rem`
        : `3rem`,
    maxHeight: `${(parseFloat(endPoint) - parseFloat(startPoint) + 0.2) *
      100}%`,
    height: `${(parseFloat(endPoint) - parseFloat(startPoint) + 0.2) * 100}%`,
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    marginLeft: '-1rem',
    backgroundColor: '#000',
    color: '#fff !important',
    borderColor: details.color,
    width: width,
    zIndex: 999
  };
  return (
    <>
      <div
        onClick={() => setstate({ open: true })}
        style={styleElements}
        className="rdc-container__row__column__event"
      >
        <div
          className="rdc-container__row__column__event__content"
          style={{
            padding: details.duration < 60 ? '0.6rem' : '1rem',
            fontSize: details.duration < 60 ? '0.8rem' : '1rem',
            color: '#fff'
          }}
        >
          <div className="rdc-container__row__column__event__container__title">
            {details.eventsTitle}
          </div>

          <div className="rdc-container__row__column__event__container__body">{`${
            details.startTime
          } - ${details.endTime} Hrs`}</div>
        </div>
      </div>
      {/* {state.open && (
        <Modal
          animation={false}
          show={true}
          onHide={() => setstate({ open: false })}
          size="lg"
        >
          <Modal.Header
            style={{
              backgroundColor: 'transparent',
              color: details.color,
              padding: '1rem 2.5rem'
            }}
            closeButton
          >
            <Modal.Title id="example-modal-sizes-title-sm">
              {details.eventsTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formPlaintextStartTime">
                <Form.Label column>Start time</Form.Label>
                <Col>
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={`${details.startTime}Hrs`}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Col} controlId="formPlaintextEndTime">
                <Form.Label column>End time</Form.Label>
                <Col>
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={`${details.endTime}Hrs`}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer style={{ padding: '1rem 2.5rem' }}>
            <Button onClick={() => setstate({ open: false })}>Close</Button>
          </Modal.Footer>
        </Modal>
      )} */}
    </>
  );
};
