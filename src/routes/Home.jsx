import React from "react";
import MoyaLogo from "@images/moyaLogo.png";
import Search from "@components/Layout/Search"
import { HomeStyle, SearchAtHome } from "@routes/style";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeStyle>
        <img className="logo" src={MoyaLogo} alt="MoYa" />
        <ul className="menuWrapper">
          <li><Link to="/domestic">국내주식</Link></li>
          <li><Link to="/global">해외주식</Link></li>
          <li>뉴스</li>
        </ul>
        <div className="slogan">
          당신을 위한 뉴스<span>n개</span>가 준비되어 있습니다
          <div>지금 바로 검색해 보세요!</div>
        </div>
        <SearchAtHome>
          <Search />
        </SearchAtHome>
    </HomeStyle>
  );
};

export default Home;
