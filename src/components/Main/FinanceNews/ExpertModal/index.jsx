import React, { useEffect } from "react";
import { ExpertModalWrapper } from "./style";
import { axios } from "redaxios";

const ExpertModal = ({ isActiveModal, setIsActiveModal }) => {
  return (
    <ExpertModalWrapper className={isActiveModal && "active"}>
      <div className="box">
        <div className="header">
          <h2>전문가 번역 요청</h2>
          <div className="text">
            전문가 번역은 유료 서비스입니다.
            <br />
            번역이 완료되면 이메일로 전달해 드립니다.
          </div>
        </div>
        <form action="">
          <ul>
            <li>
              <label>이메일 주소</label>
              <input type="text" placeholder="이메일 주소를 입력하십시오." />
            </li>
            <li>
              <label>번역 섹션</label>
              <select>
                <option value="content">본문</option>
                <option value="summary">요약문</option>
              </select>
            </li>
          </ul>
          <div className="price">
            <div className="content">
              본문 예상 금액 : <span>22,880원</span>
            </div>
            <div className="summary">
              요약문 예상 금액 : <span>9,920원</span>
            </div>
          </div>
          <div className="buttonWrapper">
            <button type="submit" className="submit">
              메일 보내기
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => setIsActiveModal(false)}>
              취소
            </button>
          </div>
        </form>
      </div>
      <div className="bg" onClick={() => setIsActiveModal(false)}></div>
    </ExpertModalWrapper>
  );
};

export default ExpertModal;
