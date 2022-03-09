import React from "react";
import { TableHeaderWrapper, Row, Cell } from "./style";

const TableHeader = ({ data, title }) => {
  return <TableHeaderWrapper>
    <thead>
      <Row className="table__header">
        <Cell colSpan={2}>{title}</Cell>
      </Row>
    </thead>
    <tbody>
      <Row className="table__body">
        <Cell>{data}</Cell>
      </Row>
    </tbody>
  </TableHeaderWrapper>
}

export default TableHeader;