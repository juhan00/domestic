import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  & > .header-left {
    display: flex;
    justify-content: space-between;
    min-width: 750px;
  }

  & > .header-right-apply {
    all: unset;
    cursor: pointer;
    border-radius: 30px;
    background: #5fb6ad;
    color: white;
    padding: 10px 30px;
    position: absolute;
    right: 0;
  }
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  min-width: 400px;
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

export const PeriodButtonsWrapper = styled.div`
  display: flex;
  & > button {
    all: unset;
    cursor: pointer;
    padding: 5px;
    border: 1px solid #5fb6ad;
    border-radius: 10px;
    margin: 3px;
  }
`;

export const ContentsWrapper = styled.div``;

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0;
  justify-content: space-between;

  & > .content-card > .content-card-content div {
    margin-bottom: 10px;
  }

  & > .content-card {
    padding: 30px 50px;
    display: flex;
    border-radius: 20px;
    align-items: center;
    background: white;
  }

  & > .content-card > .content-card-content > .content-card-content-title {
    color: #505050;
  }

  &
    > .content-card
    > .content-card-content
    > .content-card-content-description {
    color: #999999;
    font-size: 12px;
  }

  & > .content-card > .content-card-content-emoji {
    margin-left: 20px;
  }
`;
