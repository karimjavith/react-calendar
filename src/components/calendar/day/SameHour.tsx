import React, { useEffect, useRef } from 'react';
import dateFns from 'date-fns';
export const SameHour = () => {
  const getMin = dateFns.getMinutes(new Date());
  const topPosition = `${Math.floor(getMin / 4) / 4}rem`;
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current &&
      ref.current.scrollIntoView({
        behavior: 'smooth'
      });
    return () => {};
  });
  return (
    <div style={{ position: 'relative' }}>
      <div
        className="rdc-container__row__column rdc-container__row__column__same-hour"
        ref={ref}
        style={{ marginTop: topPosition }}
      />
    </div>
  );
};
