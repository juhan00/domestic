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
  }, [location, stockId]);

  return (
    <HeaderWrapper>
      <NavLink
        to={`/${firstTarget}/statistics/${stockId}`}
        className={({ isActive }) => (isActive ? "selected" : "")}>
        재무상태표
      </NavLink>
      <NavLink
        to={`/${firstTarget}/balance/${stockId}`}
        className={({ isActive }) => (isActive ? "selected" : "")}>
        대차대조표
      </NavLink>
      <NavLink
        to={`/${firstTarget}/income/${stockId}`}
        className={({ isActive }) => (isActive ? "selected" : "")}>
        손익계산서
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
