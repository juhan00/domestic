import React, { useState, useEffect } from "react";
import { DisclosureListWrapper } from "./style";

const DomesticList = ({ list, offset, limit }) => {
  // const [posts, setPosts] = useState([]); // 공시 리스트

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
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{li.corp_name}</td>
                  <td>{li.report_nm}</td>
                  <td>{li.flr_nm}</td>
                  <td>{li.rcept_dt}</td>
                  <td>{li.rm}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <label>
            <select
              type="number"
              value={limit}
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="100">100</option>
            </select>
          </label> */}
      </div>
    </DisclosureListWrapper>
  );
};

export default DomesticList;