import React from "react";
import { TermsStyle } from "@routes/style";
import { NavLink } from "react-router-dom";
import MoyaLogoWh from "@images/moyaLogo_Wh.png";
import Footer from "@components/Layout/Footer";

const PrivacyTerms = () => {
  return (
    <TermsStyle>
      <header className="header">
        <div className="inner">
          <NavLink to="/">
            <img className="logo" src={MoyaLogoWh} alt="MoYa" />
          </NavLink>{" "}
          <button className="login">로그인</button>
        </div>
      </header>
      <div className="inner">
        <div className="termsWrapper">
          <ul>
            <li className="title">
              <span>개인정보 취급방침</span>시스메틱 서비스 개인정보 취급방침
              입니다.
            </li>
            <li className="provider"></li>
            <li className="list">
              시스메틱 (이하 "서비스"라 합니다)는 정보통신망이용촉진 및 정보보호
              등에 관한 법률, 개인정보 보호법 등에 따라 회원님의 개인정보를
              보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록
              하기 위하여 다음과 같이 개인정보 취급방침을 수립 공개합니다.
            </li>
            <li className="list">
              <span className="listNumber">
                제1조(개인정보의 수집 항목 및 수집 방법)
              </span>
              1) 서비스는 회원가입, 서비스 제공에 관한 계약 이행 및 기타 서비스
              제공을 위해 회원가입 당시 아래와 같은 개인정보를 수집하고
              있습니다.
              <div>
                가. 회원 가입 및 관리 - 필수항목 : 이메일 주소, 비밀번호 -
                추가항목 : 이름, 사진, 휴대전화 번호, 지역, 성별 <br />
                나. 서비스 제공 - 추가항목 : 이름, 사진, 휴대전화 번호, 지역
                정보 <br />
                다. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로
                생성되어 수집될 수 있습니다. - IP주소, 기기고유번호, 서비스
                이용기록, 방문 기록, 불량 이용 기록 등
              </div>
              2) 개인정보의 수집 방법 시스메틱 사이트(회원가입), 이메일을 통한
              온라인 상담
            </li>
            <li className="list">
              <span className="listNumber">
                제2조(개인정보의 수집 및 이용목적)
              </span>
              서비스는 다음과 같이 회원님의 개인정보를 수집합니다. 처리하고 있는
              개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용
              목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의
              동의를 받는 등 필요한 조치를 이행할 예정입니다.
              <div>
                1)개인정보의 수집·이용 목적 :개인정보의 수집·이용 목적 <br />
                2)수집하는 개인정보의 항목 :이메일 주소, 비밀번호, 이름, 사진,
                휴대전화 번호, IP주소, 기기고유번호, 서비스 이용기록, 방문 기록,
                불량 이용 기록 등 <br />
                3)개인정보의 보유·이용 기간 :서비스 탈퇴시까지
              </div>
            </li>
            <li className="list">
              <span className="listNumber">
                제3조(회원님의 권리·의무 및 행사방법)
              </span>
              회원 및 법정 대리인은 담당자(담당 조형준, 연락처:
              help@sysmetic.co.kr)에게 언제든지 등록되어 있는 자신 혹은 당해 만
              14세 미만 아동의 개인정보를 조회하거나 수정, 가입해지를 요청할 수
              있습니다. 회원님 및 법정대리인의 개인정보 조회, 수정은 회사의
              개인정보관리책임자에게 전자우편을 통하여 하실 수 있으며 서비스는
              이에 대해 지체없이 조치하겠습니다. 회원님께서 개인정보의 오류에
              대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해
              개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3
              자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이
              통지하여 정정이 이루어지도록 하겠습니다.
            </li>
            <li className="list">
              <span className="listNumber">
                제4조(개인정보 자동수집장치의 설치/운영 및 거부에 관한 사항)
              </span>
              서비스는 회원님의 쿠키를 수집하지 않습니다.
            </li>
            <li className="list">
              <span className="listNumber">제5조(개인정보의 파기)</span> 1)
              서비스는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
              불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.{" "}
              <br />
              2) 회원님으로부터 동의 받은 개인정보 보유기간이 경과하거나
              처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를
              계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
              데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다. <br />
              3) 개인정보 파기의 절차 및 방법은 다음과 같습니다.
              <div>
                (1) 파기절차 서비스는 파기 사유가 발생한 개인정보를 선정하고,
                서비스의 개인정보 보호책임자의 승인을 받아 개인정보를
                파기합니다. <br />
                (2) 파기방법 서비스는 전자적 파일 형태로 기록·저장된 개인정보는
                기록을 재생할 수 없도록 로우레밸포멧(Low Level Format) 등의
                방법을 이용하여 파기하며, 종이 문서에 기록·저장된 개인정보는
                분쇄기로 분쇄하거나 소각하여 파기합니다.
              </div>
            </li>
            <li className="list">
              <span className="listNumber">
                제6조(개인정보의 안전성 확보조치)
              </span>
              서비스는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
              있습니다. <br />
              1) 관리적 조치 : 내부관리계획 수립·시행, 정기적 직원 교육 등
              <br />
              2) 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리,
              접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
              <br />
              3) 물리적 조치 : 전산실, 자료보관실 등의 접근통제
            </li>
            <li className="list">
              <span className="listNumber">제7조(개인정보 보호책임자)</span> 1)
              서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
              처리와 관련한 고객님의 불만처리 및 피해구제 등을 위하여 아래와
              같이 개인정보 보호책임자를 지정하고 있습니다. <br />▶ 개인정보
              보호책임자 성명 : 박혜정 / E-mail) help@sysmetic.co.kr <br />
              2) 회원님께서는 서비스를 이용하면서 발생한 모든 개인정보 보호 관련
              문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게
              문의할 수 있습니다. 서비스는 회원님의 문의에 대해 지체없이 답변 및
              처리해드릴 것입니다.
            </li>
            <li className="list">
              <span className="listNumber">제8조(개인정보 취급방침 변경)</span>
              1) 현 개인정보취급방침 내용 추가, 삭제 및 수정이 있을 시에는 개정
              최소 7일전부터 서비스의 '공지사항'을 통해 고지할 것입니다. 다만,
              개인정보의 수집 및 활용, 제3자 제공 등과 같이 이용자 권리의 중요한
              변경이 있을 경우에는 최소 30일 전에 고지합니다. <br />
              2) 이 개인정보 취급방침은 2017. 04.01부터 적용됩니다.
            </li>
          </ul>
        </div>
        <NavLink className="btn" to="/domestic">
          국내주식으로 돌아가기
        </NavLink>
        <NavLink className="btn" to="/global">
          해외주식으로 돌아가기
        </NavLink>
      </div>
      <Footer />
    </TermsStyle>
  );
};
export default PrivacyTerms;
