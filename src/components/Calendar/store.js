export const onDateClick = day => {
  return {
    type: "DATE_CLICK",
    day
  };
};
export const nextMonth = dateFns => {
  return {
    type: "NEXT_MONTH",
    dateFns
  };
};
export const prevMonth = dateFns => {
  return {
    type: "PREV_MONTH",
    dateFns
  };
};
const initialState = {
  currentMonth: new Date(),
  selectedDate: new Date()
};
const calendar = (state = initialState, action) => {
  switch (action.type) {
    case "DATE_CLICK":
      return {
        ...state,
        selectedDate: action.day
      };
    case "NEXT_MONTH":
      return {
        ...state,
        currentMonth: action.dateFns.addMonths(state.currentMonth, 1)
      };

    case "PREV_MONTH":
      return {
        ...state,
        currentMonth: action.dateFns.subMonths(state.currentMonth, 1)
      };
    default:
      return state;
  }
};
export default calendar;
