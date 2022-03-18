import React from "react";
import { TableWrapper, Table, Row, Cell, TableLoaderWrapper } from "./style";
import numberWithCommas from "@utils/numberWithComma";
import HashLoader from "react-spinners/HashLoader";

export const BetaTableLoader = () => {
  return (
    <TableLoaderWrapper>
      <div className="hash_loader_wrapper">
        <HashLoader color={"#48a185"} size={50} />
      </div>
    </TableLoaderWrapper>
  );
};

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
