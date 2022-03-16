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

const getInitialBuzzData = {
  buzz: 3,
  emotion: 3,
  category: "경제",
  press: "팍스넷",
  keyword: "삼성",
  news: 2,
};

function datasGenerator() {
  let data = [];
  let date = new Date("2021-11-29");
  function dataGenerator() {
    let start = Math.floor(Math.random() * 500 + 9000);
    let end = Math.floor(Math.random() > 0.5 ? start - 200 : start + 200);
    let volume = Math.floor(Math.random() * 50000);

    return {
      start,
      end,
      volume,
      high:
        start > end
          ? Math.floor(start + Math.random() * 200)
          : Math.floor(end + Math.random() * 200),
      low:
        start < end
          ? Math.floor(start - Math.random() * 200)
          : Math.floor(end - Math.random() * 200),
    };
  }
  for (let i = 0; i < 120; i++) {
    data[i] = dataGenerator();
    data[i].date = date;
    date = new Date(date.setDate(date.getDate() + 1));
  }
  return data;
}

export const initialState = (publicDate) => ({
  period: getInitialPeriodDate(publicDate),
  publicDate: publicDate,
  today: new Date(),
  curDate: null,
  periodError: false,
  stockData: datasGenerator(),
});

const SET_PERIOD_ACTION = "SET_PERIOD_ACTION";
export const setPeriod = (start, end, error) => ({
  actionType: SET_PERIOD_ACTION,
  startDate: start,
  endDate: end,
  periodError: error,
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
        periodError: action.periodError,
      };
    default:
      return state;
  }
};
