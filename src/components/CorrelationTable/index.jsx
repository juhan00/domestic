import React from "react";
import { TableHeader, TableBody, Row, Cell } from "../BetaTable/style";

const CorrelationTable = ({ data }) => {
  return (
    <>
      <div>
        <TableHeader>
          <thead>
            <Row className="table__header">
              <Cell colSpan={2}>CORRELATION</Cell>
            </Row>
          </thead>
          <tbody>
            <Row className="table__body">
              <Cell>{data.corr}</Cell>
            </Row>
          </tbody>
        </TableHeader>
        <TableBody>
          <thead>
            <Row className="table__header">
              <Cell colSpan={2}>VALUES</Cell>
            </Row>
            <Row className="table__header__sub">
              <Cell>Dates</Cell>
              <Cell>Corr</Cell>
            </Row>
          </thead>
          <tbody>
            {data.date.map((item, index) => {
                return <Row key={index}>
                  <Cell>{item}</Cell>
                  <Cell>{data.listX[item]}</Cell>
                </Row>
              })}
          </tbody>
        </TableBody>
      </div>
    </>
  );
};

export default CorrelationTable;
