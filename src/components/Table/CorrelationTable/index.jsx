import React from "react";
import { TableBody, Row, Cell } from "../BetaTable/style";

const CorrelationTable = ({ data }) => {
return (
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
  );
};

export default CorrelationTable;
