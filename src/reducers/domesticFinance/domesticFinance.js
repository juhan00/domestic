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
    default:
      return state;
  }
};
