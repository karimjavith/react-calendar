const BUILDING_CALENDAR_ACTIONS = {
  SELECT_DATE: "SELECT_DATE",
  NEXT_MONTH: "NEXT_MONTH",
  PREV_MONTH: "PREV_MONTH",
  MODIFY_DATE: "MODIFY_DATE",
  UPDATE_CURRENT_VIEW: "UPDATE_CURRENT_VIEW",
  GET_CALENDAR_TYPE_LIST: "GET_CALENDAR_TYPE_LIST",
  ERROR_BOUNDARY: "ERROR_BOUNDARY"
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
export const throwErrorFromBoundary = errorObj => {
  return {
    type: BUILDING_CALENDAR_ACTIONS.ERROR_BOUNDARY,
    errorObj
  }
}
export const initialState = {
  currentMonth: new Date(),
  selectedDate: new Date(),
  currentView: "DAY",
  toggleCalendarView: undefined,
  calendarTypes: {},
  errorBoundary: {
    error: null,
    errorInfo: null
  }
};
export const getCalendarTypeList = () => {
  return {
    type: BUILDING_CALENDAR_ACTIONS.GET_CALENDAR_TYPE_LIST
  };
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
    case "MODIFY_DATE":
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
    case "UPDATE_CURRENT_VIEW":
      return {
        ...state,
        currentView: action.viewType
      };
    case BUILDING_CALENDAR_ACTIONS.GET_CALENDAR_TYPE_LIST:
      return {
        ...state,
        calendarTypes: {
          1: "Facility Calendar",
          2: "Request Calendar",
          3: "Response Calendar",
          4: "Building Inspection",
          5: "Others"
        }
      };
    case "TOGGLE_MYCALENDAR_VIEW":
      return {
        ...state,
        toggleCalendarView: !state.toggleCalendarView
      };
    case BUILDING_CALENDAR_ACTIONS.ERROR_BOUNDARY:
    return {
      ...state,
      errorBoundary: Object.assign({}, state.errorBoundary, {
        ["error"]: action.errorObj.error,
        ["errorInfo"]: action.errorObj.errorInfo
      })
    }
    default:
      return state;
  }
};
export default calendar;
