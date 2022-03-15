import React from "react";
import SysmeticLogo from "@images/sysmeticLogo.png";
import {
  FooterContainer,
  FooterWrapper,
  CompanyInfoWrapper,
} from "@components/Layout/Footer/style";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <img className="logo" src={SysmeticLogo} alt="시스메틱 로고" />
        <CompanyInfoWrapper>
          <div>
            <NavLink to="/">홈</NavLink>
            <NavLink to="/terms">이용약관</NavLink>
            <NavLink to="/privacy">개인정보 취급방침</NavLink>
          </div>
          <div className="companyInfo">
            사업자 등록번호 : 711-96-00050
            <br />
            통신판매업신고 : 제2020-서울영등포-2864호
            <br />
            특허출원번호 : 10-2016-00262203
            <br />
            주소지 : 서울시 영등포구 당산로41길 11, E동 1202호{" "}
          </div>
        </CompanyInfoWrapper>
        <span>
          시스메틱의 모든 사이트의 내용은 정보를 제공하기 위함이며, 투자권유와
          주식 및 파생상품 매매를 목적으로 하고 있지 않습니다.
          <br />
          따라서 본 사이트의 수익률과 관련 정보에 대해서는 (주)시스메틱은 어떠한
          책임도 없습니다.
          <br />
          또한 본 사이트를 통해 제공받게 되는 운용성과의 결과에 대해서도
          (주)시스메틱은 어떠한 책임이 없으며 모든 책임과 활용되는 모든 정보는
          투자자 본인의 책임입니다.
        </span>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
