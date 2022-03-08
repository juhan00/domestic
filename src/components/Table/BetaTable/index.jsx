import React from "react";
import { TableBody, Row, Cell } from "./style";
import TableHeader from "@components/Table/TableHeader"

const BetaTable = ({ data }) => {
  return (
    <>
      <div>
        <TableBody>
          <thead>
            <Row className="table__header">
              <Cell colSpan={3}>RETURNS</Cell>
            </Row>
            <Row className="table__header__sub">
              <Cell>Dates</Cell>
              <Cell>{data.axisX}</Cell>
              <Cell>{data.axisY}</Cell>
            </Row>
          </thead>
          <tbody>
            {data.date.map((item, index) => {
              return <Row key={index}>
                <Cell>{item}</Cell>
                <Cell>{data.listX[item]}</Cell>
                <Cell>{data.listY[item]}</Cell>
              </Row>
            })}
          </tbody>
        </TableBody>
      </div>
    </>
  );
};

export default BetaTable;