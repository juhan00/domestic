import React from "react";
import WarningIcon from "@images/warning.png";
import { useNavigate } from "react-router-dom";
import { NotFoundtyle } from "./style";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundtyle>
      <img src={WarningIcon} alt="경고" />
      <span className="notice">요청하신 페이지를 찾을 수 없습니다</span>
      <span className="description">
        찾으시려는 페이지의 주소가 잘못 입력되었거나, 페이지 주소의 변경 혹은
        삭제로 인해 사용하실 수 없습니다.
        <br /> 입력하신 페이지의 주소가 정확한지 다시 한번 확인 해 주시기
        바랍니다.
      </span>
      <div className="goBack" onClick={() => navigate(-1)}>
        이전 페이지로
      </div>
    </NotFoundtyle>
  );
};

export default NotFound;
