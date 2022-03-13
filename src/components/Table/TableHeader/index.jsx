import { number } from "prop-types";
import React from "react";
import { TableWrapper, Table, Row, Cell } from "../BetaTable/style";

const TableHeader = ({ data, title }) => {
  return (
    <TableWrapper style={{ height: "130px" }}>
      <Table>
        <thead>
          <Row className="table__header">
            <Cell colSpan={2}>{title}</Cell>
          </Row>
        </thead>
        <tbody>
          <Row className="table__body">
            <Cell>{data.toFixed(5)}</Cell>
          </Row>
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default TableHeader;
