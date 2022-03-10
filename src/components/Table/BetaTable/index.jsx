import React from "react";
import { TableBody, Row, Cell } from "./style";
import TableHeader from "@components/Table/TableHeader";

const BetaTable = ({ data, names }) => {
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
              <Cell>{names[0]}</Cell>
              <Cell>{names[1]}</Cell>
            </Row>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <Row key={index}>
                <Cell>{item.basDt}</Cell>
                <Cell>{item.xPrice}%</Cell>
                <Cell>{item.yPrice}%</Cell>
              </Row>
            ))}
          </tbody>
        </TableBody>
      </div>
    </>
  );
};

export default BetaTable;
