import React from "react";
import { HeaderWrapper, InputWrapper } from "./style";

const StatisticsHeader = () => {
  return (
    <HeaderWrapper>
      <h3>{"회귀 그래프(Regression Graph)"}</h3>
      <InputWrapper>
        <input type="date" name="date" />
        ~
        <input type="date" name="date" />
        <select name="type">
          <option value="type a">Daily</option>
          <option value="type a">Monthly</option>
          <option value="type a">Annually</option>
        </select>
      </InputWrapper>

    </HeaderWrapper>
  );
};

export default StatisticsHeader;