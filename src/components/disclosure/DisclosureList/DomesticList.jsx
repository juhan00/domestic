import React, { useState, useEffect } from "react";
import { DisclosureListWrapper } from "./style";

const DomesticList = ({ data, offset, limit }) => {
  console.log(data)

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
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.corp_name}</td>
                  <td>{li.report_nm}</td>
                  <td>{li.flr_nm}</td>
                  <td>{li.rcept_dt}</td>
                  <td>{li.rm}</td>
                </tr>
              );
            })}
          </tbody>
      </table>
    </DisclosureListWrapper>
  );
};

export default DomesticList;