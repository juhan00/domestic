import React, { useEffect, useState } from "react";
import TableHeader from "@components/Table/TableHeader";
import CorrelationTable from "@components/Table/CorrelationTable";
import CorrelationChart from "@components/CorrelationChart";
import { domesticSample } from "@utils/statisticsData";
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
import { useParams } from "react-router-dom";

const DoCorrelation = () => {
  const [dataX, setDataX] = useState({});
  const [dataY, setDataY] = useState({});
  const [corr, setCorr] = useState(0);
  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const crno = useParams();

  useEffect(() => {
    (async () => {
      sampleJson(crno.stockId, "percentage")
        .then((res) => res.data)
        .then((data) => setDataX(data));
      sampleJson("035420", "percentage")
        .then((res) => res.data)
        .then((data) => setDataY(data));
    })();
    return () => {
      setDataX({});
      setDataY({});
    };
  }, [crno]);

  useEffect(() => {
    if (Object.keys(dataX).length && Object.keys(dataY).length) {
      const { itmsNm: xName, data: xData } = dataX;
      const { itmsNm: yName, data: yData } = dataY;
      setNames([xName, yName]);

      const mergedArray = xData.reduce(
        (a, b, i) =>
          a.concat({
            basDt: xData[i]["basDt"],
            xPrice: xData[i]["price"],
            yPrice: yData[i]["price"],
          }),
        [],
      );
      setData(mergedArray);
      setCorr(
        xData.map((_, idx) => ({
          basDt: xData[idx]["basDt"],
          corr:
            idx > 1 ? corrCoeff(xData.slice(0, idx), yData.slice(0, idx)) : 1,
        })),
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
          <TableHeader data={domesticSample.corr} title={"CORRELATION"} />
          <CorrelationTable data={domesticSample} />
        </TableWrapper>
      </ContentWrapper>
    </RouteWrapper>
  );
};

export default DoCorrelation;
