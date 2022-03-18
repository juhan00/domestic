import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  line-height: 36px;
  width: 100%;
  margin-bottom: 18px;
  a {
    background-color: #f5f6f8;
    color: #999999;
    width: 228px;
    height: 36px;
    display: inline-block;
    border: 1px solid #f0f0f6;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    &.selected {
      color: #111111;
      background-color: #e8f1ee;
      border: 1px solid #35a67d;
      font-weight: 700;
    }
  }
`;

export const InputWrapper = styled.div`
  float: right;
  border-radius: 6px;
  text-align: center;
  input[type="date"] {
    background-color: transparent;
    width: 150px;
    height: 100%;
    border: none;
    border-bottom: 1px solid #e5e5ec;
    color: #111111;
    padding-bottom: 5px;
    margin: 0 5px;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    width: 15px;
    padding: 0px;
    margin: 0px;
    color: #767676;
  }
  select {
    margin-left: 10px;
  }
`;
