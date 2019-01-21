const BUILDING_CALENDAR_ACTIONS = {
  SELECT_DATE: "SELECT_DATE",
  NEXT_MONTH: "NEXT_MONTH",
  PREV_MONTH: "PREV_MONTH",
  MODIFY_DATE: "MODIFY_DATE",
  UPDATE_CURRENT_VIEW: "UPDATE_CURRENT_VIEW",
  GET_CALENDAR_TYPE_LIST: "GET_CALENDAR_TYPE_LIST"
};
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
export const modifyDate = (dateFns, count) => {
  return {
    type: "MODIFY_DATE",
    dateFns,
    count
  };
};
export const updateCurrentView = viewType => {
  return {
    type: "UPDATE_CURRENT_VIEW",
    viewType
  };
};
export const toggleMyCalendarViewfn = () => {
  return {
    type: "TOGGLE_MYCALENDAR_VIEW"
  };
};
const initialState = {
  currentMonth: new Date(),
  selectedDate: new Date(),
  currentView: "DAY",
  toggleCalendarView: undefined,
  calendarTypes: {}
};
export const getCalendarTypeList = () => {
  return {
    type: BUILDING_CALENDAR_ACTIONS.GET_CALENDAR_TYPE_LIST
  };
};
const calendar = {
  initialState: initialState,
  handlers: {
    DATE_CLICK: (state, action) => {
      return {
        ...state,
        selectedDate: action.day
      };
    },
    [BUILDING_CALENDAR_ACTIONS.NEXT_MONTH]: (state, action) => {
      return {
        ...state,
        currentMonth: action.dateFns.addMonths(state.currentMonth, 1)
      };
    },
    [BUILDING_CALENDAR_ACTIONS.PREV_MONTH]: (state, action) => {
      return {
        ...state,
        currentMonth: action.dateFns.subMonths(state.currentMonth, 1)
      };
    },
    [BUILDING_CALENDAR_ACTIONS.MODIFY_DATE]: (state, action) => {
      let displayDate;
      if (state.currentView === "WEEK") {
        displayDate = action.dateFns.addDays(
          state.selectedDate,
          Math.sign(action.count) === 1 ? 7 : -7
        );
      } else
        displayDate = action.dateFns.addDays(state.selectedDate, action.count);
      return {
        ...state,
        selectedDate: displayDate,
        currentMonth: action.dateFns.format(displayDate)
      };
    },
    [BUILDING_CALENDAR_ACTIONS.UPDATE_CURRENT_VIEW]: (state, action) => {
      return {
        ...state,
        currentView: action.viewType
      };
    },
    [BUILDING_CALENDAR_ACTIONS.GET_CALENDAR_TYPE_LIST]: (state, action) => {
      return {
        ...state,
        calendarTypes: {
          1: "Calendar 1",
          2: "Calendar 2",
          3: "Calendar 3"
        }
      };
    },
    TOGGLE_MYCALENDAR_VIEW: (state, action) => {
      return {
        ...state,
        toggleCalendarView: !state.toggleCalendarView
      };
    }
  }
};
export default calendar;
