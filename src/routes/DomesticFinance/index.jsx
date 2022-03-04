import React, { useReducer, useRef } from "react";
import KeywordChart from "@components/KeywordChart";
import CategoryChart from "@components/CategoryChart";
import PressChart from "@components/pressChart";
import BuzzChart from "@components/BuzzChart";
import EmotionChart from "@components/EmotionChart";
import MainChart from "@components/MainChart";
import {
  reducer,
  initialState,
  getPreviousDate,
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
} from "./style";

const DomesticStock = () => {
  const [domesticState, dispatch] = useReducer(reducer, initialState);

  const { period } = domesticState;
  const { startDate, endDate } = period;

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    dispatch(setPeriod(start, end));
  };

  const onClickPeriodButton = (numOfDates) => {
    const newStartDate = getPreviousDate(endDate, numOfDates);
    dispatch(setPeriod(newStartDate, endDate));
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
            <button onClick={() => onClickPeriodButton(30)}>1개월</button>
            <button onClick={() => onClickPeriodButton(180)}>6개월</button>
            <button onClick={() => onClickPeriodButton(365)}>1년</button>
            <button onClick={() => onClickPeriodButton(1095)}>3년</button>
            <button onClick={() => onClickPeriodButton(1825)}>5년</button>
            <button onClick={() => onClickPeriodButton(3650)}>10년</button>
          </PeriodButtonsWrapper>
        </div>
        <button className="header-right-apply">적용</button>
      </HeaderWrapper>
      <ContentsWrapper>
        <CardsWrapper>
          <div className="content-card">
            <div className="content-card-content">
              <div className="content-card-content-title">
                Apple Inc 관련 뉴스 수집량
              </div>
              <div className="content-card-content-description">
                2022.02.01-2022.03.01 기준
              </div>
              <div className="content-card-content-value">
                <span className="content-card-value-number">538</span>
                <span className="content-card-value-unit">개</span>
              </div>
            </div>
            <div className="content-card-content-emoji">B</div>
          </div>
          <div className="content-card">
            <div className="content-card-content">
              <div className="content-card-content-title">
                Apple Inc 관련 뉴스 수집량
              </div>
              <div className="content-card-content-description">
                2022.02.01-2022.03.01 기준
              </div>
              <div className="content-card-content-value">
                <span className="content-card-value-number">538</span>
                <span className="content-card-value-unit">개</span>
              </div>
            </div>
            <div className="content-card-content-emoji">B</div>
          </div>
          <div className="content-card">
            <div className="content-card-content">
              <div className="content-card-content-title">
                Apple Inc 관련 뉴스 수집량
              </div>
              <div className="content-card-content-description">
                2022.02.01-2022.03.01 기준
              </div>
              <div className="content-card-content-value">
                <span className="content-card-value-number">538</span>
                <span className="content-card-value-unit">개</span>
              </div>
            </div>
            <div className="content-card-content-emoji">B</div>
          </div>
          <div className="content-card">
            <div className="content-card-content">
              <div className="content-card-content-title">
                Apple Inc 관련 뉴스 수집량
              </div>
              <div className="content-card-content-description">
                2022.02.01-2022.03.01 기준
              </div>
              <div className="content-card-content-value">
                <span className="content-card-value-number">538</span>
                <span className="content-card-value-unit">개</span>
              </div>
            </div>
            <div className="content-card-content-emoji">B</div>
          </div>
        </CardsWrapper>
        <KeywordChart data={keywordData.current} />
        <CategoryChart data={categoryData.current} />
        <PressChart data={pressData.current} />
        <BuzzChart />
        <EmotionChart />
        <MainChart />
      </ContentsWrapper>
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
