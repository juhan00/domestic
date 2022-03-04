export const getPreviousDate = (date, numOfDays) => {
  const previousDate = date.getTime() - numOfDays * 24 * 60 * 60 * 1000;
  return new Date(previousDate);
};

const getPeriodDate = () => {
  const endDate = new Date();
  const yearDate = getPreviousDate(endDate, 365);
  const startDate = new Date(yearDate);
  return { startDate, endDate };
};

export const initialState = {
  period: getPeriodDate(),
  curDate: null,
};

const SET_PERIOD_ACTION = "SET_PERIOD_ACTION";
export const setPeriod = (start, end) => ({
  actionType: SET_PERIOD_ACTION,
  startDate: start,
  endDate: end,
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
        },
      };
    default:
      return state;
  }
};
