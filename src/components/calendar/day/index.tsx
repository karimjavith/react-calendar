import React from 'react';
import Loader from '../../shared/Loader';
import { Rows } from './Rows';

type DayProps = {
  selectedDate: any;
  events: any[];
  isLoading: boolean;
};
const Day = (props: DayProps) => (
  <>
    {props.isLoading && <Loader />}
    {!props.isLoading && (
      <Rows selectedDate={props.selectedDate} events={props.events} />
    )}
  </>
);
export default Day;
