import { getPreviousDate } from "@utils/getPreviousDate";
import { getDateDiff } from "@utils/getDateDiff";

const getInitialPeriodDate = (publicDate) => {
  const endDate = new Date();
  const yearDate = getPreviousDate(endDate, 365);
  const prevDate = new Date(yearDate);
  const startDate = prevDate > publicDate ? prevDate : publicDate;
  const diff = getDateDiff(startDate, endDate);
  return { startDate, endDate, diff };
};

export const initialState = (publicDate) => ({
  period: getInitialPeriodDate(publicDate),
  curDate: null,
});

const SET_PERIOD_ACTION = "SET_PERIOD_ACTION";
export const setPeriod = (start, end) => ({
  actionType: SET_PERIOD_ACTION,
  startDate: start,
  endDate: end,
  diff: getDateDiff(end, start),
});

const SET_STARTDATE_ACTION = "SET_STARTDATE_ACTION";
export const setStartDate = (date) => ({
  actionType: SET_STARTDATE_ACTION,
  startDate: date,
});

const SET_ENDDATE_ACTION = "SET_ENDDATE_ACTION";
export const setEndDate = (date) => ({
  actionType: SET_STARTDATE_ACTION,
  endDate: date,
});

export const reducer = (state, action) => {
  const { actionType } = action;

  switch (actionType) {
    case SET_PERIOD_ACTION:
      return {
        ...state,
        period: {
          startDate: action.startDate,
          endDate: action.endDate,
          diff: action.diff,
        },
      };
    case SET_STARTDATE_ACTION:
      return {
        ...state,
        period: {
          ...state.period,
          startDate: action.startDate,
        },
      };
    case SET_ENDDATE_ACTION:
      return {
        ...state,
        period: {
          ...state.period,
          endDate: action.endDate,
        },
      };
    default:
      return state;
  }
};
