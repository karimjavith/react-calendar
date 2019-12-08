import React from 'react';
import dateFns from 'date-fns';

type DayWeekHeader = {
  selectedDate: string;
  changeDate: (by: number) => void;
};
const DayWeekHeader = (props: DayWeekHeader) => {
  const title = `${dateFns.format(props.selectedDate, 'DD MMM YYYY')}`;
  return (
    <div className="rdc-container__header">
      <div className="rdc-container__header__group">
        <button
          className="rdc-container__btn rdc-container__btn--today"
          onClick={() => props.changeDate(0)}
        >
          Today
        </button>
      </div>
      <div className="rdc-container__header__group">
        <span
          className="rdc-container__header__group__item"
          style={{ cursor: 'pointer' }}
          onClick={() => props.changeDate(-1)}
        >
          <i className="icon ion-android-arrow-dropleft" />
        </span>
        <span className="rdc-container__header__group__item">{title}</span>
        <span
          className="rdc-container__header__group__item"
          style={{ cursor: 'pointer' }}
          onClick={() => props.changeDate(1)}
        >
          <i className="icon ion-android-arrow-dropright" />
        </span>
      </div>
    </div>
  );
};

export default DayWeekHeader;
