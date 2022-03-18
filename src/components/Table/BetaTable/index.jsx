import React from "react";
import { TableWrapper, Table, Row, Cell } from "./style";
import numberWithCommas from "@utils/numberWithComma";

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
              <Cell className="item">{numberWithCommas(item.xPrice)}</Cell>
              <Cell className="item">{numberWithCommas(item.xPrice)}</Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default BetaTable;
