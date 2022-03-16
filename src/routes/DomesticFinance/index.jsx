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
  ContentsWrapper,
  DatePickerWrapper,
  ErrorMessageWrapper,
  HeaderWrapper,
  FooterWrapper,
} from "./style";
import { getPreviousDate } from "@utils/getPreviousDate";
import FinanceChart from "@components/financeChart";
import CardsList from "@components/Cards";
import useInput from "@utils/useInput";
import period_active from "@images/period_active.svg";
import period_unactive from "@images/period_unactive.svg";
import ComparisonCardsList from "@components/ComparisonCardsList";
import { timeFormat } from "d3";
import chart_description from "@images/chart_description.svg";
const publicDate = new Date("2021-08-01");

const DomesticStock = () => {
  const [domesticState, dispatch] = useReducer(
    reducer,
    initialState(publicDate),
  );

  const { period, periodError, today, stockData } = domesticState;
  console.log(domesticState);
  const { startDate, endDate, diff } = period;

  const [curStartDate, onChangeCurStartDate, setCurStartDate] =
    useInput(startDate);
  const [curEndDate, onChangeCurEndDate, setCurEndDate] = useInput(endDate);

  const onClickPeriodButton = (numOfDates) => {
    const newStartDate = getPreviousDate(endDate, numOfDates);
    const startError = newStartDate >= publicDate ? false : true;
    const targetStartDate =
      newStartDate >= publicDate ? newStartDate : publicDate;

    const curDate = new Date();
    const endError = curDate < endDate ? true : false;
    const targetEndDate = curDate < endDate ? curDate : endDate;

    setCurStartDate(targetStartDate);
    setCurEndDate(targetEndDate);

    dispatch(setPeriod(targetStartDate, targetEndDate, startError || endError));
  };

  const onClickPeriodApplyButton = () => {
    dispatch(setPeriod(curStartDate, curEndDate));
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

  const finance1 = useRef([
    {
      date: "2021-12-3",
      values: [
        { type: "take", value: -42500 },
        { type: "profit", value: 91200 },
        { type: "netprofit", value: 31200 },
      ],
    },
    {
      date: "2021-12-3",
      values: [
        { type: "assets", value: -42500 },
        { type: "dept", value: 91200 },
        { type: "capital", value: 31200 },
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
  ]);

  const finance2 = useRef([
    {
      date: "2021-9-3",
      values: [
        { type: "take", value: -42500 },
        { type: "profit", value: 91200 },
        { type: "netprofit", value: 31200 },
      ],
    },
    {
      date: "2021-09-1",
      values: [
        { type: "assets", value: -42500 },
        { type: "dept", value: 91200 },
        { type: "capital", value: 31200 },
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
  ]);

  const finance3 = useRef([
    {
      date: "2021-6-3",
      values: [
        { type: "take", value: -42500 },
        { type: "profit", value: 91200 },
        { type: "netprofit", value: 31200 },
      ],
    },
    {
      date: "2021-6-1",
      values: [
        { type: "assets", value: -42500 },
        { type: "dept", value: 91200 },
        { type: "capital", value: 31200 },
      ],
    },
    {
      date: "2021-6",
      values: [
        { type: "sales", value: -42500 },
        { type: "investment", value: 91200 },
        { type: "finance", value: 31200 },
      ],
    },
  ]);

  return (
    <main>
      <HeaderWrapper>
        <div className="header-left">
          <DatePickerWrapper>
            <ReactDatePicker
              dateFormat="yyyy.MM.dd"
              selected={curStartDate}
              onChange={onChangeCurStartDate}
              startDate={curStartDate}
              endDate={curEndDate}
              minDate={publicDate}
              selectsStart
            />
            <span>~</span>
            <ReactDatePicker
              dateFormat="yyyy.MM.dd"
              selected={curEndDate}
              selectsEnd
              onChange={onChangeCurEndDate}
              startDate={curStartDate}
              endDate={curEndDate}
              maxDate={today}
              minDate={curStartDate}
            />
          </DatePickerWrapper>
          <PeriodButtonsWrapper>
            <button
              onClick={() => onClickPeriodButton(30)}
              className={diff === 30 ? "active" : null}>
              <img src={diff === 30 ? period_active : period_unactive} />
              1개월
            </button>
            <button
              onClick={() => onClickPeriodButton(90)}
              className={diff === 90 ? "active" : null}>
              <img src={diff === 90 ? period_active : period_unactive} />
              3개월
            </button>
            <button
              onClick={() => onClickPeriodButton(180)}
              className={diff === 180 ? "active" : null}>
              <img src={diff === 180 ? period_active : period_unactive} />
              6개월
            </button>
            <button
              onClick={() => onClickPeriodButton(365)}
              className={diff === 365 ? "active" : null}>
              <img src={diff === 365 ? period_active : period_unactive} />
              1년
            </button>
            <button
              onClick={() => onClickPeriodButton(1095)}
              className={diff === 1095 ? "active" : null}>
              <img src={diff === 1095 ? period_active : period_unactive} />
              3년
            </button>
          </PeriodButtonsWrapper>
        </div>
        <div className="header-right">
          <button onClick={onClickPeriodApplyButton}>적용</button>
        </div>
      </HeaderWrapper>
      {periodError && (
        <ErrorMessageWrapper>
          {`상장일 이후부터 현재 날짜까지의 기간만 선택 가능합니다.`}
        </ErrorMessageWrapper>
      )}
      <ContentsWrapper>
        <CardsList startDate={curStartDate} endDate={curEndDate} />
        <div className="level1-wrapper">
          <div className="level1-chart-wrapper">
            <div className="level1-main-chart-wrapper">
              <div className="main-chart-wrapper">
                <div className="main-title">
                  주식차트
                  <img className="title-emoji" src={chart_description} />
                </div>
                {diff < 91 && startDate && endDate ? (
                  <MainChart
                    startDate={startDate}
                    endDate={endDate}
                    stockData={stockData}
                  />
                ) : (
                  <MainAreaChart
                    startDate={startDate}
                    endDate={endDate}
                    stockData={stockData}
                  />
                )}
              </div>
            </div>
            <div className="level1-moya-chart-wrapper">
              <div className="news-title">
                뉴스분석
                <img className="title-emoji" src={chart_description} />
              </div>
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
            <div className="keyword-title">
              키워드 분석
              <img className="title-emoji" src={chart_description} />
            </div>
            <KeywordChart data={keywordData.current} />
          </div>
          <div className="chart-wrapper">
            <div className="press-title">
              언론사 분석
              <img className="title-emoji" src={chart_description} />
            </div>
            <PressChart data={pressData.current} />
          </div>
          <div className="chart-wrapper">
            <div className="category-title">
              카테고리 분석
              <img className="title-emoji" src={chart_description} />
            </div>
            <CategoryChart data={categoryData.current} />
          </div>
        </div>
        <div className="finances-wrapper">
          <div className="finances-title-wrapper">
            <div className="finances-title">
              재무데이터 그래프
              <img className="title-emoji" src={chart_description} />
            </div>
            <div className="finances-buttons-wrapper">
              <button className="finances-button">연간실적</button>
              <button className="finances-button active">분기실적</button>
            </div>
          </div>
          <div className="finances-content">
            <div className="finances-ele">
              {finance1.current.map((ele, idx) => (
                <div className="chart-wrapper" key={idx}>
                  <FinanceChart data={ele} />
                </div>
              ))}
            </div>
            <div className="finances-ele">
              {finance2.current.map((ele, idx) => (
                <div className="chart-wrapper" key={idx}>
                  <FinanceChart data={ele} />
                </div>
              ))}
            </div>
            <div className="finances-ele">
              {finance3.current.map((ele, idx) => (
                <div className="chart-wrapper" key={idx}>
                  <FinanceChart data={ele} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentsWrapper>
      <FooterWrapper>
        <div className="footer-comparison">
          <div className="title-wrapper">
            <div className="title">
              국내 종목비교
              <button className="title-button">반도체와반도체장비</button>
            </div>
            <div className="period">{timeFormat("%Y.%m.%d")(endDate)} 기준</div>
          </div>
          <ComparisonCardsList />
        </div>
        <div className="footer-comparison">
          <div className="title-wrapper">
            <div className="title">
              해외 종목비교
              <button className="title-button">반도체와반도체장비</button>
            </div>
            <div className="period">{timeFormat("%Y.%m.%d")(endDate)} 기준</div>
          </div>
          <ComparisonCardsList />
        </div>
      </FooterWrapper>
    </main>
  );
};

export default DomesticStock;
