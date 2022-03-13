import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > .header-left {
    display: flex;
    justify-content: space-between;
  }

  & > .header-right {
    display: flex;
    justify-content: flex-end;
  }

  & > .header-right > button {
    all: unset;
    cursor: pointer;
    border-radius: 30px;
    background: #5fb6ad;
    color: white;
    padding: 10px 30px;
  }
`;

export const PeriodButtonsWrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-wrap: no-wrap;
  & > button {
    all: unset;
    cursor: pointer;
    padding: 5px;
    border: 1px solid #5fb6ad;
    border-radius: 10px;
    margin: 3px;
  }
  .active {
    background: #5fb6ad;
  }
`;

export const DatePickerWrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: space-between;
  & > .react-datepicker-wrapper {
    width: auto;
    border-bottom: 1px solid #767676;
  }

  & > .react-datepicker-wrapper > .react-datepicker__input-container > input {
    border: none;
    padding: 5px;
    background: none;
    border-radius: 30px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0;
  justify-content: flex-start;

  & .card-info div {
    margin-bottom: 10px;
  }

  & .content-card {
    flex: 1 1 0;
    padding: 30px 40px;
    margin: 0px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 12px;
    align-items: center;
  }
  & .content-card:first-of-type {
    margin-left: 0px;
  }

  & .content-card:last-of-type {
    margin-right: 0px;
  }

  & .title {
    font-size: 12px;
    line-height: 16px;
    color: #505050;
  }

  & .description {
    font-size: 11px;
    line-height: 16px;
    color: #999999;
  }

  & .number {
    font-size: 22px;
    line-height: 26px;
  }

  & .emoji {
    margin-left: 20px;
  }
`;

export const ContentsWrapper = styled.div`
  & .level1-wrapper {
    display: flex;
    justify-content: space-between;
  }

  & .chart-wrapper {
    flex: 1 1 0;
    min-height: 380px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    border-radius: 12px;
  }

  & > .level1-wrapper > .level1-chart-wrapper {
    flex: 1 1 0;
    margin-right: 10px;
    box-sizing: boder-box;
    display: flex;
    flex-direction: column;
  }
  & > .level1-wrapper > .level1-chart-wrapper > .level1-main-chart-wrapper {
    box-sizing: border-box;
    min-height: 389px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  &
    > .level1-wrapper
    > .level1-chart-wrapper
    > .level1-main-chart-wrapper
    > .main-chart-title {
    font-weight: 500;
    font-size: 18px;
    margin-left: 40px;
    line-height: 26px;
  }

  & > .level1-wrapper > .level1-chart-wrapper > .level1-moya-chart-wrapper {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 12px;
  }

  &
    > .level1-wrapper
    > .level1-chart-wrapper
    > .level1-moya-chart-wrapper
    > .buzz-chart-wrapper {
    box-sizing: border-box;
    max-height: 50%;
  }
  &
    > .level1-wrapper
    > .level1-chart-wrapper
    > .level1-moya-chart-wrapper
    > .emotion-chart-wrapper {
    box-sizing: border-box;
    max-height: 50%;
  }

  & > .level1-wrapper > .level1-news-list-wrapper {
    flex: 1 1 0;
    min-height: 846px;
    margin-left: 10px;
    box-sizing: boder-box;
    background: #ffffff;
    border-radius: 12px;
  }

  & > .level2-chart-wrapper {
    display: flex;
    margin: 20px 0;
    justify-content: space-between;
  }

  & .level2-chart-wrapper .chart-wrapper:nth-of-type(2) {
    margin: 0 20px;
  }
  & .finances-wrapper {
    width: 100%;
    display: flex;
    background: #fff;
    justify-content: space-between;
  }

  & .finances-ele {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  & .finances-ele .chart-wrapper {
    min-height: auto;
    border-radius: none;
    background: none;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > .footer-comparison {
    width: 100%;
    background: red;
    min-height: 164px;
  }

  & > .footer-comparison > .footer-comparison-title {
    font-size: 34px;
    margin: 20px 0 0 32px;
  }

  & > .footer-comparison > .footer-comparison-card-wrapper {
    display: flex;
    margin: 20px 32px 28px 32px;
  }

  & > .footer-comparison > .footer-comparison-card-wrapper {
    display: flex;
    margin: 20px 32px 28px 32px;
  }

  & > .footer-comparison > .footer-comparison-card-wrapper > .footer-card {
    flex: 1 1 150px;
  }

  & > .footer-comparison:first-of-type {
    margin: 20px 0;
  }
`;
