import React from "react";
import {
  OptionsWrapper,
  TableHeader,
  TableBody,
  Row,
  Cell,
} from "@components/Domestic/StatisticsMain/StatisticsOptions/style";

const StatisticsOptions = (props) => {
  return (
    <>
      <OptionsWrapper>
        <TableHeader>
          <thead>
            <Row className="table__header">
              <Cell colSpan={2}>Options de</Cell>
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
                <div>영업이익</div>
              </Cell>
            </Row>
            <Row>
              <Cell className="sub__title">매출 총이익</Cell>
            </Row>
            <Row>
              <Cell>매출액순</Cell>
            </Row>
            <Row>
              <Cell>매출원가</Cell>
            </Row>
            <Row>
              <Cell className="sub__title">영업비용</Cell>
            </Row>
            <Row>
              <Cell>R&D, 연구개발</Cell>
            </Row>
            <Row>
              <Cell>유형고정자산</Cell>
            </Row>
            <Row>
              <Cell className="title">
                <div>영업외 수익</div>
              </Cell>
            </Row>
            <Row>
              <Cell>이자비용</Cell>
            </Row>
            <Row>
              <Cell>법인세비용</Cell>
            </Row>
            <Row>
              <Cell>세전이익</Cell>
            </Row>
            <Row>
              <Cell>이자 및 세전이익</Cell>
            </Row>
            <Row>
              <Cell>법인세, 이자, 감가상각비 차감전 이익</Cell>
            </Row>
            <Row>
              <Cell className="title">
                <div>통합소득</div>
              </Cell>
            </Row>
            <Row>
              <Cell>당기순이익</Cell>
            </Row>
            <Row>
              <Cell>비통제이자를 포함한 당기순이익</Cell>
            </Row>
            <Row>
              <Cell>종단영업순이익</Cell>
            </Row>
            <Row>
              <Cell>우선배당손익계산서 영향</Cell>
            </Row>
            <Row>
              <Cell>보통주순이익</Cell>
            </Row>
            <Row>
              <Cell className="title">
                <div>주당순이익</div>
              </Cell>
            </Row>
            <Row>
              <Cell>희당주석순이익</Cell>
            </Row>
            <Row>
              <Cell>가중평균주식</Cell>
            </Row>
            <Row>
              <Cell>희석가중평균주식수</Cell>
            </Row>
          </tbody>
        </TableBody>
      </OptionsWrapper>
    </>
  );
};

export default StatisticsOptions;
