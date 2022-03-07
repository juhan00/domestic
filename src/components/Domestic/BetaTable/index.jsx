import React from "react";
import { TableHeader, TableBody, Row, Cell } from "./style";
import domesticSample from "@utils/doStatisticsData"

const BetaTable = () => {
  return (
    <>
      <div>
        <TableHeader>
          <thead>
            <Row className="table__header">
              <Cell colSpan={2}>Beta</Cell>
            </Row>
          </thead>
          <tbody>
            <Row className="table__body">
              <Cell>1.4847</Cell>
            </Row>
          </tbody>
        </TableHeader>
        <TableBody>
          <thead>
            <Row className="table__header">
              <Cell colSpan={3}>Returns</Cell>
            </Row>
            <Row className="table__header__sub">
              <Cell>Dates</Cell>
              <Cell>SPY</Cell>
              <Cell>APPLE</Cell>
            </Row>
          </thead>
          <tbody>
            {domesticSample.date.map((item, index) => {
              return <Row key={index}>
                <Cell>{item}</Cell>
                <Cell>{domesticSample.listX[item]}</Cell>
                <Cell>{domesticSample.listY[item]}</Cell>
              </Row>
            })}
          </tbody>
        </TableBody>
      </div>
    </>
  );
};

export default BetaTable;
