import React from "react";
import { TableWrapper, Table, Row, Cell } from "../BetaTable/style";

const CorrelationTable = ({ data }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <Row className="table__header category">
            <Cell>Dates</Cell>
            <Cell>Corr</Cell>
          </Row>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <Row key={index}>
                <Cell>{item["basDt"]}</Cell>
                <Cell className="item">{item["corr"].toFixed(5)}</Cell>
              </Row>
            );
          })}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default CorrelationTable;
