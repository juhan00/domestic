import React, { useState, useEffect } from "react";
import { DisclosureListWrapper } from "./style";

const GlobalList = ({ list, offset, limit }) => {

  return (
    <DisclosureListWrapper>
      <div className="disclosure__list">
        <table>
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
            {list.slice(offset, offset + limit).map((li, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{li.corp_name}</td>
                <td>{li.report_nm}</td>
                <td>{li.source}</td>
                <td>{li.flng_dt}</td>
                <td>{li.rm}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </DisclosureListWrapper>
  )
}

export default GlobalList;