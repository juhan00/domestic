import React from "react";
import { NavStyle, Logo } from "./style";
import { NavLink } from "react-router-dom";
import MenuIconNews from "@images/menuicon_news.svg";
import MenuIconKor from "@images/menuicon_kor.svg";
import MenuIconGlobal from "@images/menuicon_global.svg";
import MenuIconToggle from "@images/menuicon_toggle.svg";

const Nav = () => {
  return (
    <NavStyle>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul className="menuWrapper">
        <li>
          <div className="mainMenu">
            <img src={MenuIconKor} className="menuIcon" />
            <NavLink to="domestic">국내주식</NavLink>
            <img src={MenuIconToggle} className="toggleBtn" />
          </div>
          <ul className="subMenu">
            <li>
              <NavLink to="/domestic/dofinancial">주식뉴스분석</NavLink>
            </li>
            <li>
              <NavLink to="/menu2">기업정보</NavLink>
            </li>
            <li>
              <NavLink to="/domestic/statistics">재무데이터</NavLink>
            </li>
            <li>
              <NavLink to="/domestic/disclosure">기업공시</NavLink>
            </li>
            <li>
              <NavLink to="/menu5">통계</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <div className="mainMenu">
            <img src={MenuIconGlobal} className="menuIcon" />
            해외주식
            <img src={MenuIconToggle} className="toggleBtn" />
          </div>
          <ul className="subMenu">
            <li>
              <NavLink to="/domestic/dofinancial">주식뉴스분석</NavLink>
            </li>
            <li>
              <NavLink to="//">기업정보</NavLink>
            </li>
            <li>
              <NavLink to="/domestic/statistics">재무데이터</NavLink>
            </li>
            <li>
              <NavLink to="//">기업공시</NavLink>
            </li>
            <li>
              <NavLink to="//">통계</NavLink>
            </li>
          </ul>
        </li>
        <li className="mainMenu">
          <img src={MenuIconNews} className="menuIcon" />
          뉴스
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;
