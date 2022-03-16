import React from "react";
import { HeaderWrapper, InputWrapper } from "./style";

const StatisticsHeader = () => {
  return (
    <HeaderWrapper>
      <button>"회귀 그래프(Regression Graph)"</button>
      <button>"상관 그래프(Correlation Graph)"</button>
      <InputWrapper>
        <input type="date" name="date" />
        ~
        <input type="date" name="date" />
      </InputWrapper>
    </HeaderWrapper>
  );
};

export default StatisticsHeader;