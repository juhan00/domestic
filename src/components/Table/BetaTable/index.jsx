import React from "react";
import { TableWrapper, Table, Row, Cell } from "./style";
import TableHeader from "@components/Table/TableHeader";

const BetaTable = ({ data, names }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <Row className="table__header category">
            <Cell>Dates</Cell>
            <Cell>{names[0]}</Cell>
            <Cell>{names[1]}</Cell>
          </Row>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Row key={index}>
              <Cell>{item.basDt}</Cell>
              <Cell className="item">{item.xPrice}%</Cell>
              <Cell className="item">{item.yPrice}%</Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default BetaTable;
