const getPeriodDate = () => {
  const endDate = new Date();
  const yearDate = endDate.getTime() - 365 * 24 * 60 * 60 * 1000;
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
  period: {
    startDate: start,
    endDate: end,
  },
});

export const reducer = (state, action) => {
  const { actionType } = action;

  switch (actionType) {
    case SET_PERIOD_ACTION:
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
