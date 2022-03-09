import React from "react";
import { CorrTableWrapper, TableHeader, TableBody, Row, Cell } from "./style";

const BetaTable = ({ data, names }) => {
  return (
    <CorrTableWrapper>
      <TableHeader>
        <thead>
          <Row className="table__header">
            <Cell colSpan={2}>BETA</Cell>
          </Row>
        </thead>
        <tbody>
          <Row className="table__body">
            <Cell>beta score</Cell>
          </Row>
        </tbody>
      </TableHeader>
      <TableBody>
        <thead>
          <Row className="table__header">
            <Cell colSpan={3}>RETURNS</Cell>
          </Row>
          <Row className="table__header__sub">
            <Cell>Dates</Cell>
            <Cell>{names[0]}</Cell>
            <Cell>{names[1]}</Cell>
          </Row>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <Row key={index}>
                <Cell>{item.basDt}</Cell>
                <Cell>{item.xPrice}%</Cell>
                <Cell>{item.yPrice}%</Cell>
              </Row>
            );
          })}
        </tbody>
      </TableBody>
    </CorrTableWrapper>
  );
};

export default BetaTable;
