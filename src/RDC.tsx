/* eslint-disable react/prop-types */
import React from 'react';
import Column from './components/calendar/column/index';
import './App.scss';
import { RDCProps } from './type';
import { Rows } from './components/calendar/Rows';

const RDC = (props: RDCProps) => {
  return (
    <div className="rdc-container">
      <Column events={props.events} selectedDate={props.selectedDate} />
      <Rows />
    </div>
  );
};
RDC.displayName = 'React Day Calendar';
export default RDC;
