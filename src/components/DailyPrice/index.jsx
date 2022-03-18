import React from "react";
import { TableWrapper, Table, Row, Cell } from "./style";
import Pagination from "@components/Disclosure/Pagination";
import HashLoader from "react-spinners/HashLoader";

export const DoComInfoDailyPriceLoader = () => {
  return (
    <TableWrapper>
      <div className="hash_loader_wrapper" style={{ height: "400px" }}>
        <HashLoader color={"#48a185"} size={50} />
      </div>
    </TableWrapper>
  );
};

const DoComInfoDailyPrice = ({ data, offset, limit, page, setPage }) => {
  const total = data.items.length;

  const renderRow = (num) => {
    const rows = [];
    for (let i = 0; i < num; i++) {
      rows.push(i);
    }
    return rows;
  };
  return (
    <TableWrapper>
      <h1>일별시세</h1>
      <Table>
        <thead>
          <Row className="title">
            <Cell className="date">날짜</Cell>
            <Cell>종가</Cell>
            <Cell>전일비</Cell>
            <Cell>시가</Cell>
            <Cell>고가</Cell>
            <Cell>저가</Cell>
            <Cell>거래량</Cell>
          </Row>
        </thead>
        <tbody>
          {data.items.slice(offset, offset + limit).map((item, idx) => {
            return (
              <Row className="contents" key={idx}>
                {Object.keys(item).map((key, i) =>
                  i === 2 ? (
                    <Cell
                      key={i}
                      className={item[key] >= 0 ? "increase" : "decrease"}>
                      {item[key].toFixed()}
                    </Cell>
                  ) : (
                    <Cell key={i} className={key === "basDt" ? "date" : ""}>
                      {item[key]}
                    </Cell>
                  ),
                )}
              </Row>
            );
          })}
          {total / limit !== 0 &&
            Math.ceil(total / limit) === page &&
            renderRow(limit - (total % limit)).map((i) => <Row key={i}></Row>)}
        </tbody>
      </Table>
      <Pagination
        className="pagination"
        total={data.items.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </TableWrapper>
  );
};

export default DoComInfoDailyPrice;
