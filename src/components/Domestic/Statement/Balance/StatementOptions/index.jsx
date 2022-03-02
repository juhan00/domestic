import React from "react";
import {
  OptionsWrapper,
  TableHeader,
  TableBody,
  Row,
  Cell,
} from "../../Main/StatementOptions/style";

const StatementOptions = (props) => {
  return (
    <>
      <OptionsWrapper>
        <TableHeader>
          <thead>
            <Row className="table__header">
              <Cell colSpan={2}>Options</Cell>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Cell>단위</Cell>
              <Cell>K M B</Cell>
            </Row>
            <Row>
              <Cell>소숫점표시</Cell>
              <Cell>2 +/-</Cell>
            </Row>
            <Row>
              <Cell>통화</Cell>
              <Cell>KRW</Cell>
            </Row>
          </tbody>
        </TableHeader>
        <TableBody>
          <tbody>
            <Row>
              <Cell className="title">
                <div>총자산</div>
              </Cell>
            </Row>
            <Row>
              <Cell className="sub__title">유동자산</Cell>
            </Row>
            <Row>
              <Cell>현금 및 현금 등가물</Cell>
            </Row>
            <Row>
              <Cell>단기투자</Cell>
            </Row>
            <Row>
              <Cell>매출채권</Cell>
            </Row>
            <Row>
              <Cell>재고자산</Cell>
            </Row>
            <Row>
              <Cell className="sub__title">기타자산</Cell>
            </Row>
            <Row>
              <Cell>비유동성 투자자산</Cell>
            </Row>
            <Row>
              <Cell>유형고정자산</Cell>
            </Row>
            <Row>
              <Cell>무형자산</Cell>
            </Row>
            <Row>
              <Cell>법인세자산</Cell>
            </Row>
            <Row>
              <Cell className="title">
                <div>총부채</div>
              </Cell>
            </Row>
            <Row>
              <Cell className="sub__title">유동부채</Cell>
            </Row>
            <Row>
              <Cell>유동부채</Cell>
            </Row>
            <Row>
              <Cell>매입채무</Cell>
            </Row>
            <Row>
              <Cell className="sub__title">기타부채</Cell>
            </Row>
            <Row>
              <Cell>장기차입금</Cell>
            </Row>
            <Row>
              <Cell>보증금</Cell>
            </Row>
            <Row>
              <Cell>이연수익</Cell>
            </Row>
            <Row>
              <Cell>조세채무</Cell>
            </Row>
            <Row>
              <Cell className="title">
                <div>주지분</div>
              </Cell>
            </Row>
            <Row>
              <Cell className="sub__title">유동부채</Cell>
            </Row>
            <Row>
              <Cell>축적된 이익잉여금 혹은 적자</Cell>
            </Row>
            <Row>
              <Cell>기타 포괄 손익 누계액</Cell>
            </Row>
          </tbody>
        </TableBody>
      </OptionsWrapper>
    </>
  );
};

export default StatementOptions;
