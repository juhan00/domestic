import React, { useMemo } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { HeaderWrapper, InputWrapper } from "./style";

const StatisticsHeader = () => {
  const location = useLocation().pathname;
  const stockId = useParams().stockId;

  const firstTarget = useMemo(() => {
    let target = "";
    if (location.includes("domestic")) {
      target = "domestic";
    } else if (location.includes("global")) {
      target = "global";
    }
    return target;
  }, [location]);

  return (
    <HeaderWrapper>
      <NavLink
        to={`/${firstTarget}/beta/${stockId}?005930`}
        className={({ isActive }) => (isActive ? "selected" : "")}>
        회귀 그래프(Regression Graph)
      </NavLink>
      <NavLink
        to={`/${firstTarget}/correlation/${stockId}?005930`}
        className={({ isActive }) => (isActive ? "selected" : "")}>
        상관 그래프(Correlation Graph)
      </NavLink>
      <InputWrapper>
        <input type="date" name="date" />
        ~
        <input type="date" name="date" />
      </InputWrapper>
    </HeaderWrapper>
  );
};

export default StatisticsHeader;
