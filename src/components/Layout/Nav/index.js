import React, { useMemo } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { MenuContainer } from "@components/Layout/Nav/style";

const Nav = () => {
  const location = useLocation();
  const stockId = useParams().stockId;

  const firstTarget = useMemo(() => {
    let target = "";
    if (location.pathname.includes("domestic")) {
      target = "domestic";
    } else if (location.pathname.includes("global")) {
      target = "global";
    }
    return target;
  }, [location]);

  return (
    <MenuContainer>
      {/* 해외 메뉴는 아직 검색의 디폴트인 주식 뉴스 분석이 없어서 라우트 이동이 불편하므로 작업 편이를 위해 잠시 주석 처리.  */}
      {/* <div className={stockId ? "menuWrapper" : "hide"}> */}
      <div className="menuWrapper">
        <NavLink to={`${firstTarget}/financial/${stockId}`}>
          주식뉴스분석
        </NavLink>
        <NavLink to={`${firstTarget}/cominfo/${stockId}`}>기업정보</NavLink>
        <NavLink to={`${firstTarget}/statistics/${stockId}`}>
          재무데이터
        </NavLink>
        <NavLink to={`${firstTarget}/disclosure/${stockId}`}>기업공시</NavLink>
        <NavLink to={`${firstTarget}/beta/${stockId}`}>Statistics</NavLink>
      </div>
    </MenuContainer>
  );
};

export default Nav;
