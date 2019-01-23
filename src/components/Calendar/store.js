const CALENDAR_ACTIONS = {
  SELECT_DATE: "SELECT_DATE",
  NEXT_MONTH: "NEXT_MONTH",
  PREV_MONTH: "PREV_MONTH",
  MODIFY_DATE: "MODIFY_DATE",
  UPDATE_CURRENT_VIEW: "UPDATE_CURRENT_VIEW",
  GET_CALENDAR_TYPE_LIST: "GET_CALENDAR_TYPE_LIST",
  REQ_IN_PROGRESS: "REQ_IN_PROGRESS",
  REQ_COMPLETED: "REQ_COMPLETED",
  ERROR_RESPONSE: "ERROR_RESPONSE"
};
export const onDateClick = (start, end, selectedDate) => dispatch => {
  dispatch({
    type: CALENDAR_ACTIONS.SELECT_DATE,
    selectedDate
  });
  dispatch(getCalendarTypeList(start, end));
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
export const requestInProgress = () => {
  return {
    type: CALENDAR_ACTIONS.REQ_IN_PROGRESS
  };
};
export const reqCompleted = (content) => {
  return {
    type: CALENDAR_ACTIONS.REQ_COMPLETED,
    content
  };
};
export const errorResponse = (error) => {
  return {
    type: CALENDAR_ACTIONS.ERROR_RESPONSE,
    error
  };
};
const initialState = {
  currentMonth: new Date(),
  selectedDate: new Date(),
  currentView: "DAY",
  toggleCalendarView: undefined,
  calendarTypes: {},
  isFetching: false,
  isError: false,
  errorObj: {}
};
export const getCalendarTypeList = (startDate, endDate) => dispatch => {
  dispatch(requestInProgress());
  var promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success")
    }, 1000)
  })

  return promiseObj.then(() => {

    dispatch(reqCompleted({
      1: "Calendar 1",
      2: "Calendar 2",
      3: "Calendar 3"
    }))
  }).catch((error) => {
    dispatch(errorResponse(error))
  })

};
const calendar = {
  initialState: initialState,
  handlers: {
    [CALENDAR_ACTIONS.SELECT_DATE]: (state, action) => {
      return {
        ...state,
        selectedDate: action.selectedDate
      };
    },
    [CALENDAR_ACTIONS.NEXT_MONTH]: (state, action) => {
      return {
        ...state,
        currentMonth: action.dateFns.addMonths(state.currentMonth, 1)
      };
    },
    [CALENDAR_ACTIONS.PREV_MONTH]: (state, action) => {
      return {
        ...state,
        currentMonth: action.dateFns.subMonths(state.currentMonth, 1)
      };
    },
    [CALENDAR_ACTIONS.MODIFY_DATE]: (state, action) => {
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
    [CALENDAR_ACTIONS.UPDATE_CURRENT_VIEW]: (state, action) => {
      return {
        ...state,
        currentView: action.viewType
      };
    },
    [CALENDAR_ACTIONS.GET_CALENDAR_TYPE_LIST]: (state, action) => {
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
    },
    [CALENDAR_ACTIONS.REQ_IN_PROGRESS]: (state, action) => {
      return {
        ...state,
        isFetching: true,
        selectedDate: state.selectedDate
      }
    },
    [CALENDAR_ACTIONS.REQ_COMPLETED]: (state, action) => {
      return {
        ...state,
        isFetching: false,
        calendarTypes: action.content
      }
    },
    [CALENDAR_ACTIONS.ERROR_RESPONSE]: (state, action) => {
      return {
        ...state,
        isError: true,
        errorObj: action.error
      }
    }
  }
};
export default calendar;
