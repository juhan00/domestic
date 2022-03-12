import React, { useReducer, useRef } from "react";
import KeywordChart from "@components/KeywordChart";
import CategoryChart from "@components/CategoryChart";
import PressChart from "@components/pressChart";
import BuzzChart from "@components/BuzzChart";
import EmotionChart from "@components/EmotionChart";
import MainChart from "@components/MainChart";
import MainAreaChart from "@components/MainAreaChart";
import {
  reducer,
  initialState,
  setPeriod,
} from "@reducers/domesticfinance/domesticfinance";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  PeriodButtonsWrapper,
  CardsWrapper,
  ContentsWrapper,
  DatePickerWrapper,
  HeaderWrapper,
  FooterWrapper,
} from "./style";
import { getPreviousDate } from "@utils/getPreviousDate";
import FinanceChart from "@components/financeChart";

const publicDate = new Date("2021-08-01");

const DomesticStock = () => {
  const [domesticState, dispatch] = useReducer(
    reducer,
    initialState(publicDate),
  );

  const { period } = domesticState;
  const { startDate, endDate, diff } = period;

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    dispatch(setPeriod(start, end));
  };

  const onClickPeriodButton = (numOfDates) => {
    const newStartDate = getPreviousDate(endDate, numOfDates);
    const targetDate = newStartDate > publicDate ? newStartDate : publicDate;
    dispatch(setPeriod(targetDate, endDate));
  };

  const keywordData = useRef([
    { title: "제품", value: 500 },
    { title: "삼성", value: 700 },
    { title: "기업", value: 400 },
    { title: "lg", value: 300 },
    { title: "수수료", value: 340 },
    { title: "시장", value: 150 },
    { title: "가격", value: 130 },
    { title: "반도체", value: 360 },
    { title: "갤럭시", value: 800 },
    { title: "lg전자", value: 200 },
  ]);

  const categoryData = useRef([
    { title: "경제", value: 519 },
    { title: "세계", value: 123 },
    { title: "IT/인터넷/통신", value: 101 },
    { title: "생활", value: 91 },
    { title: "금융", value: 86 },
  ]);

  const pressData = useRef([
    {
      title: "팍스넷",
      value: 838,
    },
    {
      title: "아이뉴스24",
      value: 261,
    },
    {
      title: "이투데이",
      value: 256,
    },
    {
      title: "파이낸셜뉴스",
      value: 225,
    },
    {
      title: "매일경제",
      value: 170,
    },
  ]);

  const finance1 = useRef({
    date: "2021-12",
    values: [
      { type: "take", value: -42500 },
      { type: "profit", value: 91200 },
      { type: "netprofit", value: 31200 },
    ],
  });

  const finance2 = useRef({
    date: "2021-12",
    values: [
      { type: "assets", value: -42500 },
      { type: "dept", value: 91200 },
      { type: "capital", value: 31200 },
    ],
  });

  const finance3 = useRef({
    date: "2021-12",
    values: [
      { type: "sales", value: -42500 },
      { type: "investment", value: 91200 },
      { type: "finance", value: 31200 },
    ],
  });

  return (
    <main>
      <HeaderWrapper>
        <div className="header-left">
          <DatePickerWrapper>
            <ReactDatePicker
              dateFormat="yyyy.MM.dd"
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              minDate={publicDate}
              selectsStart
            />
            <span>~</span>
            <ReactDatePicker
              dateFormat="yyyy.MM.dd"
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </DatePickerWrapper>
          <PeriodButtonsWrapper>
            <button
              onClick={() => onClickPeriodButton(30)}
              className={diff === 30 ? "active" : null}>
              1개월
            </button>
            <button
              onClick={() => onClickPeriodButton(90)}
              className={diff === 90 ? "active" : null}>
              3개월
            </button>
            <button
              onClick={() => onClickPeriodButton(180)}
              className={diff === 180 ? "active" : null}>
              6개월
            </button>
            <button
              onClick={() => onClickPeriodButton(365)}
              className={diff === 365 ? "active" : null}>
              1년
            </button>
            <button
              onClick={() => onClickPeriodButton(1095)}
              className={diff === 1095 ? "active" : null}>
              3년
            </button>
            <button
              onClick={() => onClickPeriodButton(1825)}
              className={diff === 1825 ? "active" : null}>
              5년
            </button>
            <button
              onClick={() => onClickPeriodButton(3650)}
              className={diff === 3650 ? "active" : null}>
              10년
            </button>
          </PeriodButtonsWrapper>
        </div>
        <div className="header-right">
          <button>적용</button>
        </div>
      </HeaderWrapper>
      <ContentsWrapper>
        <CardsWrapper>
          <div className="content-card">
            <div className="emoji">B</div>
            <div className="card-info">
              <div className="title">Apple Inc 관련 뉴스 수집량</div>
              <div className="date">2022.02.01-2022.03.01 기준</div>
              <div className="value">
                <span className="number">538</span>
                <span className="unit">개</span>
              </div>
            </div>
          </div>
          <div className="content-card">
            <div className="emoji">B</div>
            <div className="card-info">
              <div className="title">Apple Inc 관련 뉴스 수집량</div>
              <div className="description">2022.02.01-2022.03.01 기준</div>
              <div className="value">
                <span className="number">538</span>
                <span className="unit">개</span>
              </div>
            </div>
          </div>
          <div className="content-card">
            <div className="emoji">B</div>
            <div className="card-info">
              <div className="title">Apple Inc 관련 뉴스 수집량</div>
              <div className="description">2022.02.01-2022.03.01 기준</div>
              <div className="value">
                <span className="number">538</span>
                <span className="unit">개</span>
              </div>
            </div>
          </div>
          <div className="content-card">
            <div className="emoji">B</div>
            <div className="card-info">
              <div className="title">Apple Inc 관련 뉴스 수집량</div>
              <div className="description">2022.02.01-2022.03.01 기준</div>
              <div className="value">
                <span className="number">538</span>
                <span className="unit">개</span>
              </div>
            </div>
          </div>
        </CardsWrapper>
        <div className="level1-wrapper">
          <div className="level1-chart-wrapper">
            <div className="level1-main-chart-wrapper">
              <div className="main-chart-wrapper">
                <div className="title">주식 차트</div>
                {diff < 91 ? <MainChart /> : <MainAreaChart />}
              </div>
            </div>
            <div className="level1-moya-chart-wrapper">
              <div className="title">뉴스 분석</div>
              <div className="buzz-chart-wrapper">
                <BuzzChart />
              </div>
              <div className="emotion-chart-wrapper">
                <EmotionChart />
              </div>
            </div>
          </div>
          <div className="level1-news-list-wrapper">뉴스 리스트</div>
        </div>
        <div className="level2-chart-wrapper">
          <div className="chart-wrapper">
            <KeywordChart data={keywordData.current} />
          </div>
          <div className="chart-wrapper">
            <PressChart data={pressData.current} />
          </div>
          <div className="chart-wrapper">
            <CategoryChart data={categoryData.current} />
          </div>
        </div>
        <div className="finances-wrapper">
          <div className="finances-ele">
            <div className="chart-wrapper">
              <FinanceChart data={finance1.current} />
            </div>
            <div className="chart-wrapper">
              <FinanceChart data={finance2.current} />
            </div>
            <div className="chart-wrapper">
              <FinanceChart data={finance3.current} />
            </div>
          </div>
          <div className="finances-ele">
            <div className="chart-wrapper">
              <FinanceChart data={finance1.current} />
            </div>
            <div className="chart-wrapper">
              <FinanceChart data={finance2.current} />
            </div>
            <div className="chart-wrapper">
              <FinanceChart data={finance3.current} />
            </div>
          </div>
          <div className="finances-ele">
            <div className="chart-wrapper">
              <FinanceChart data={finance1.current} />
            </div>
            <div className="chart-wrapper">
              <FinanceChart data={finance2.current} />
            </div>
            <div className="chart-wrapper">
              <FinanceChart data={finance3.current} />
            </div>
          </div>
        </div>
      </ContentsWrapper>
      <FooterWrapper>
        <div className="footer-comparison">
          <div className="title">국내 주식 비교</div>
          <div className="card-wrapper">ㅁㄴㅇㄻㄴㅇㄹ</div>
        </div>
        <div className="footer-comparison">
          <div className="title">해외 주식 비교</div>
          <div className="card-wrapper">ㅁㄴㅇㄻㄴㅇㄹ</div>
        </div>
      </FooterWrapper>
    </main>
  );
};

export default DomesticStock;

// basDt	string
// YYYYMMDD
// 기준일자

// srtnCd	string
// 종목 코드보다 짧으면서 유일성이 보장되는 코드(6자리)

// isinCd	string
// 현선물 통합상품의 종목 코드(12자리)

// itmsNm	string
// 종목의 명칭

// mrktCtg	string
// 주식의 시장 구분 (KOSPI/KOSDAQ/KONEX 중 1)

// clpr	number
// 정규시장의 매매시간종료시까지 형성되는 최종가격

// vs	number
// 전일 대비 등락

// fltRt	number
// 전일 대비 등락에 따른 비율

// mkp	number
// 정규시장의 매매시간개시후 형성되는 최초가격

// hipr	number
// 하루 중 가격의 최고치

// lopr	number
// 하루 중 가격의 최저치

// trqu	number
// 체결수량의 누적 합계

// trPrc	number
// 거래건 별 체결가격 * 체결수량의 누적 합계

// lstgStCnt	number
// 종목의 상장주식수

// mrktTotAmt	number
// 종가 * 상장주식수

// https://stackoverflow.com/questions/22972669/nvd3-d3-js-date-format-returns-incorrect-month
