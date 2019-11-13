import React, { useEffect, useRef } from 'react';
import dateFns from 'date-fns';
import { RDCContext } from '../../..';

export const SameHour = () => {
  const { systemDate } = React.useContext(RDCContext);
  const min = dateFns.getMinutes(systemDate);
  const hour = dateFns.getHours(systemDate);
  const key = hour > 9 ? `rdc-` + hour : `rdc-0` + hour.toString();
  const clientOffSetTop =
    document.getElementById(key) && document.getElementById(key).offsetTop;
  const clientOffSetLeft =
    document.getElementById(key) && document.getElementById(key).offsetLeft;
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current &&
      ref.current.scrollIntoView({
        behavior: 'smooth'
      });
    return () => {};
  });
  const style = {
    top: clientOffSetTop + 8 + min + 'px',
    left: clientOffSetLeft + 'px',
    width: 'calc(100% - 110px)',
    border: '0.5px solid red'
  };
  return (
    <div style={{ ...style, position: 'absolute' }} ref={ref}>
      <span
        style={{
          position: 'absolute',
          left: '-32px',
          top: '-9px',
          fontSize: '8px'
        }}
      >{`${hour}:${min < 10 ? '0' + min : min}`}</span>
    </div>
  );
};
