import React, { useEffect, useMemo } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { MenuContainer, MenuItem } from "@components/Layout/Nav/style";

const Nav = ({ scrolled }) => {
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
    <MenuContainer className={scrolled ? "sticky" : ""}>
      {/* 해외 메뉴는 아직 검색의 디폴트인 주식 뉴스 분석이 없어서 라우트 이동이 불편하므로 작업 편이를 위해 잠시 주석 처리.  */}
      <ul className={stockId ? "menuWrapper" : "hide"}>
        {/* <ul className="menuWrapper"> */}
        <MenuItem>
          <NavLink
            className="mainmenu"
            to={`${firstTarget}/financial/${stockId}`}>
            주식뉴스분석
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            className="mainmenu"
            to={`${firstTarget}/cominfo/${stockId}`}>
            기업정보
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            className="mainmenu"
            to={`${firstTarget}/statistics/${stockId}`}>
            재무데이터
          </NavLink>
          <div className="submenuWrapper">
            <NavLink
              className="submenu"
              to={`${firstTarget}/statistics/ratio/${stockId}`}>
              재무비율
            </NavLink>
            <NavLink
              className="submenu"
              to={`${firstTarget}/statistics/balance/${stockId}`}>
              재무상태표
            </NavLink>
            <NavLink
              className="submenu"
              to={`${firstTarget}/statistics/income/${stockId}`}>
              손익계산서
            </NavLink>
          </div>
        </MenuItem>
        <MenuItem>
          <NavLink
            className="mainmenu"
            to={`${firstTarget}/disclosure/${stockId}`}>
            기업공시
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="mainmenu" to={`${firstTarget}/beta/${stockId}`}>
            Statistics
          </NavLink>
          <div className="submenuWrapper">
            <NavLink className="submenu" to={`${firstTarget}/beta/${stockId}`}>
              Bata
            </NavLink>
            <NavLink
              className="submenu"
              to={`${firstTarget}/Correlation/${stockId}`}>
              Correlation
            </NavLink>
          </div>
        </MenuItem>
      </ul>
    </MenuContainer>
  );
};

export default Nav;
