import React from "react";
import {
  TableWrapper,
  Table,
  Row,
  Cell,
  TableLoaderWrapper,
} from "../BetaTable/style";
import HashLoader from "react-spinners/HashLoader";

export const CorrelationTableLoader = () => {
  return (
    <TableLoaderWrapper>
      <div className="hash_loader_wrapper">
        <HashLoader color={"#48a185"} size={50} />
      </div>
    </TableLoaderWrapper>
  );
};

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
