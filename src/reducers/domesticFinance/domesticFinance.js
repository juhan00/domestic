import { getPreviousDate } from "@utils/getPreviousDate";
import { getDateDiff } from "@utils/getDateDiff";
import calculateMovingAverageLine from "@utils/calculateMovingAverageLine";
import randomColor from "randomcolor";
import { sum } from "d3";

const getInitialPeriodDate = (publicDate) => {
  const endDate = new Date();
  const yearDate = getPreviousDate(endDate, 365);
  const prevDate = new Date(yearDate);
  const startDate = prevDate > publicDate ? prevDate : publicDate;
  const diff = getDateDiff(startDate, endDate);
  return { startDate, endDate, diff };
};

function emotionDatasGenerator() {
  let data = [];
  let date = new Date("2021-08-01");
  function dataGenerator() {
    let emotion = Math.floor(Math.random() * 6);
    return Math.random() < 0.5 ? { value: emotion * -1 } : { value: emotion };
  }

  for (let i = 0; i < 360; i++) {
    data[i] = dataGenerator();
    data[i].date = date;
    date = new Date(date.setDate(date.getDate() + 1));
  }
  return data;
}

function buzzDatasGenerator() {
  let data = [];
  let date = new Date("2021-08-01");
  function dataGenerator() {
    let buzz = Math.floor(Math.random() * 6);

    return { value: buzz };
  }
  for (let i = 0; i < 360; i++) {
    data[i] = dataGenerator();
    data[i].date = date;
    date = new Date(date.setDate(date.getDate() + 1));
  }
  return data;
}

function stockDatasGenerator() {
  let data = [];
  let date = new Date("2021-08-01");
  let movingAverageLines = [5, 20, 60, 120];

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
  for (let i = 0; i < 360; i++) {
    data[i] = dataGenerator();
    data[i].date = date;
    date = new Date(date.setDate(date.getDate() + 1));
  }

  movingAverageLines.forEach((ele) => {
    calculateMovingAverageLine(data, ele);
  });
  return data;
}

function newsDatasGenerator() {
  let data = [];
  let date = new Date("2021-08-01");

  function emotionGenerator() {
    let emotion = Math.floor(Math.random() * 6);
    return Math.random() < 0.5 ? emotion * -1 : emotion;
  }
  function dataGenerator(i) {
    return {
      press: "????????????",
      title: "????????????, 8??? '????????? ??? S7??S7+' ????????? ????????? ?????? ??????",
      summarized:
        "???????????LTE?????????????114???9500???, Wi-Fi?????????????104???9400?????????. ???????????5G?????????????149???9300???, LTE???????????139???9200???, Wi-Fi?????????????129???9100?????????. '????????? ?????S7+'??????????? ????????? ???????????5G LTE Wi-Fi??????????? ????????????.",
      title: "????????????, 8??? '????????? ??? S7??S7+' ????????? ????????? ?????? ??????",
      img: "http://www.paxetv.com/news/thumbnail/202104/114203_86612_1148_v150.jpg",
      url: "http://www.paxetv.com/news/articleView.html?idxno=114203",
      keyword: ["??????", "?????????", "?????????"],
      id: 4296132659 + i,
      emotion: emotionGenerator(),
    };
  }
  for (let i = 0; i < 360; i++) {
    data[i] = dataGenerator(i);
    data[i].date = date;
    date = new Date(date.setDate(date.getDate() + 1));
  }
  return data;
}

const financeDatas = [
  [
    {
      date: "2021-6",
      values: [
        { type: "take", value: -42500 },
        { type: "profit", value: 91200 },
        { type: "netprofit", value: 31200 },
      ],
    },
    {
      date: "2021-9",
      values: [
        { type: "take", value: -42500 },
        { type: "profit", value: 91200 },
        { type: "netprofit", value: 31200 },
      ],
    },
    {
      date: "2021-12",
      values: [
        { type: "take", value: -42500 },
        { type: "profit", value: 91200 },
        { type: "netprofit", value: 31200 },
      ],
    },
  ],
  [
    {
      date: "2021-6",
      values: [
        { type: "assets", value: -42500 },
        { type: "dept", value: 91200 },
        { type: "capital", value: 31200 },
      ],
    },
    {
      date: "2021-9",
      values: [
        { type: "assets", value: -42500 },
        { type: "dept", value: 91200 },
        { type: "capital", value: 31200 },
      ],
    },
    {
      date: "2021-12",
      values: [
        { type: "assets", value: -42500 },
        { type: "dept", value: 91200 },
        { type: "capital", value: 31200 },
      ],
    },
  ],
  [
    {
      date: "2021-6",
      values: [
        { type: "sales", value: -42500 },
        { type: "investment", value: 91200 },
        { type: "finance", value: 31200 },
      ],
    },
    {
      date: "2021-9",
      values: [
        { type: "sales", value: -42500 },
        { type: "investment", value: 91200 },
        { type: "finance", value: 31200 },
      ],
    },
    {
      date: "2021-12",
      values: [
        { type: "sales", value: -42500 },
        { type: "investment", value: 91200 },
        { type: "finance", value: 31200 },
      ],
    },
  ],
];

const keywordDatas = [
  { title: "??????", value: 500 },
  { title: "??????", value: 700 },
  { title: "??????", value: 400 },
  { title: "lg", value: 300 },
  { title: "?????????", value: 340 },
  { title: "??????", value: 150 },
  { title: "??????", value: 130 },
  { title: "?????????", value: 360 },
  { title: "?????????", value: 800 },
  { title: "lg??????", value: 200 },
];

const categoryDatas = [
  { title: "??????", value: 519 },
  { title: "??????", value: 123 },
  { title: "IT/?????????/??????", value: 101 },
  { title: "??????", value: 91 },
  { title: "??????", value: 86 },
];

const entireValue = sum(categoryDatas, (data) => data.value);

const colorArray = randomColor({
  hue: "green",
  luminosity: "light",
  alpha: 0.1,
  count: categoryDatas.length,
});

categoryDatas.map((ele, idx) => {
  ele.percentage = ((ele.value * 100) / entireValue).toFixed(2);
  ele.color = colorArray[idx];
});

const pressDatas = [
  {
    title: "?????????",
    value: 838,
  },
  {
    title: "????????????24",
    value: 261,
  },
  {
    title: "????????????",
    value: 256,
  },
  {
    title: "??????????????????",
    value: 225,
  },
  {
    title: "????????????",
    value: 170,
  },
];

export const initialState = (publicDate, name) => ({
  period: getInitialPeriodDate(publicDate),
  publicDate: publicDate,
  today: new Date(),
  curDate: null,
  title: name,
  periodError: false,
  stockData: stockDatasGenerator(),
  financialDatas: financeDatas,
  buzzDatas: buzzDatasGenerator(),
  emotionDatas: emotionDatasGenerator(),
  pressDatas: pressDatas,
  categoryDatas: categoryDatas,
  keywordDatas: keywordDatas,
  newsDatas: newsDatasGenerator(),
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
