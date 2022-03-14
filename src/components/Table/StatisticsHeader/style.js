import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  line-height: 26px;
  margin-bottom: 15px;
  overflow: hidden;
  h3 {
    color: #111111;
    font-size: 18px;
    font-weight: 500;
    float: left;
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
