import React, { useEffect, useState } from "react";
import TableHeader from "@components/Table/TableHeader";
import CorrelationTable from "@components/Table/CorrelationTable";
import CorrelationChart from "@components/CorrelationChart";
import StatisticsHeader from "@components/Table/StatisticsHeader";
import {
  RouteWrapper,
  SemiHeader,
  ContentWrapper,
  InputWrapper,
  TableWrapper,
  ChartWrapper,
} from "../DoBeta/style";
import { sampleJson } from "@utils/api";
import { corrCoeff } from "@utils/corrCoeff";
import { useParams, useLocation } from "react-router-dom";

const DoCorrelation = () => {
  const [dataX, setDataX] = useState({});
  const [dataY, setDataY] = useState({});
  const [corr, setCorr] = useState(0);
  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const crno = useParams();
  const xTick = useLocation().search.slice(1);

  useEffect(() => {
    (async () => {
      sampleJson(xTick.toLowerCase(), "price")
        .then((res) => res.data)
        .then((data) => setDataX(data));
      sampleJson(crno.stockId.toLowerCase(), "price")
        .then((res) => res.data)
        .then((data) => setDataY(data));
    })();
    return () => {
      setDataX({});
      setDataY({});
    };
  }, [crno, xTick]);

  useEffect(() => {
    if (Object.keys(dataX).length && Object.keys(dataY).length) {
      const { itmsNm: xName, items: xData } = dataX;
      const { itmsNm: yName, items: yData } = dataY;
      setNames([xName, yName]);

      const mergedArray = xData.slice(0, 200).reduce(
        (a, b, i) =>
          a.concat({
            basDt: xData[i]["basDt"],
            xPrice: xData[i]["close"],
            yPrice: yData[i]["close"],
          }),
        [],
      );
      setData(mergedArray);
      setCorr(
        xData
          .map((_, idx) => ({
            basDt: xData[idx]["basDt"],
            corr:
              idx > 1 ? corrCoeff(xData.slice(0, idx), yData.slice(0, idx)) : 1,
          }))
          .slice(3),
      );
      setLoading(false);
    }
  }, [dataX, dataY, crno]);

  return (
    <RouteWrapper>
      <StatisticsHeader />
      <ContentWrapper>
        <ChartWrapper>
          {!loading && <CorrelationChart corr={corr} names={names} />}
        </ChartWrapper>
        <TableWrapper>
          {!loading && (
            <TableHeader data={corr[0]["corr"]} title={"CORRELATION"} />
          )}
          {!loading && <CorrelationTable data={corr} />}
        </TableWrapper>
      </ContentWrapper>
    </RouteWrapper>
  );
};

export default DoCorrelation;
