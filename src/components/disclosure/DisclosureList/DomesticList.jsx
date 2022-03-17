import React, { useState, useEffect } from "react";
import { DisclosureListWrapper } from "./style";

const DomesticList = ({ page, data, offset, limit }) => {
  const handleButtonClick = (rcept_no) => {
    window.open(`https://dart.fss.or.kr/dsaf001/main.do?rcpNo=${rcept_no}`) 
  }
  return (
    <DisclosureListWrapper>
      <table className="disclosure__list">
          <thead className="disclosure__list__header">
            <tr>
              <th>번호</th>
              <th>공시대상회사</th>
              <th>보고서명</th>
              <th>제출인</th>
              <th>공시일자</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody className="disclosure__list__body">
            {data.list.slice(offset, offset + limit).map((li, index) => {
              return (
                <tr key={index} onClick={(e) => handleButtonClick(li.rcept_no)}>
                  <td>{(index + 1) + limit * (page - 1)}</td>
                  <td>{data.corp_name}</td>
                  <td><a className="link" target='_blank' href={`https://dart.fss.or.kr/dsaf001/main.do?rcpNo=${li.rcept_no}`}>{li.report_nm}</a></td>
                  <td>{li.flr_nm}</td>
                  <td className="date">{li.rcept_dt}</td>
                  <td>
                    {li.rm === "유" && <span style={{backgroundColor: "#FDE3E1"}}>유</span>}
                    {li.rm === "정" && <span style={{backgroundColor: "#E8F1EE"}}>정</span>}
                    {li.rm === "유정" && <span style={{backgroundColor: "#F7F7FB"}}>유정</span>}
                    {li.rm === "공" && <span style={{backgroundColor: "#CDDDEA"}}>공</span>}
                    {li.rm === "연" && <span style={{backgroundColor: "#FFF2DD"}}>연</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
      </table>
    </DisclosureListWrapper>
  );
};

export default DomesticList;