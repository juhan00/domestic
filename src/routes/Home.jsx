import React from "react";
import { HomeStyle, SearchMenuStyleAtHome  } from "@components/Layout/style";
import Search from "@components/Layout/Search"
import Dropdown from "@components/Layout/Dropdown";
import { Logo } from "@components/Layout/style";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeStyle>
        <Logo />
        <ul>
          <li><Link to="/domestic">국내주식</Link></li>
          <li><Link to="/global">해외주식</Link></li>
          <li>뉴스</li>
        </ul>
        <div className="slogan">
          당신을 위한 뉴스<span>n개</span>가 준비되어 있습니다
          <div>지금 바로 검색해 보세요!</div>
        </div>
        <SearchMenuStyleAtHome>
          <Dropdown />
          <Search />
        </SearchMenuStyleAtHome>
    </HomeStyle>
  );
};

export default Home;
