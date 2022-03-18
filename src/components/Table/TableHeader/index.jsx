import { number } from "prop-types";
import React from "react";
import {
  TableWrapper,
  Table,
  Row,
  Cell,
  TableHeaderLoaderWrapper,
} from "../BetaTable/style";
import { HashLoader } from "react-spinners";

export const TableHeaderLoader = () => {
  return (
    <TableHeaderLoaderWrapper>
      <div className="hash_loader_wrapper">
        <HashLoader color={"#48a185"} size={50} />
      </div>
    </TableHeaderLoaderWrapper>
  );
};

const TableHeader = ({ data, title }) => {
  return (
    <TableWrapper style={{ height: "115px" }}>
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
