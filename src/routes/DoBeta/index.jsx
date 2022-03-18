import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableHeader from "@components/Table/TableHeader";
import BetaTable from "@components/Table/BetaTable";
import BetaChart from "@components/BetaChart";
import StatisticsHeader from "@components/Table/StatisticsHeader";
import {
  RouteWrapper,
  SemiHeader,
  ContentWrapper,
  InputWrapper,
  TableWrapper,
  ChartWrapper,
} from "./style";
import { sampleJson } from "@utils/api";
import betaCoeff, { corrCoeff } from "@utils/corrCoeff";
import { HashLoader } from "react-spinners";

const DoBeta = () => {
  const [dataX, setDataX] = useState({});
  const [dataY, setDataY] = useState({});
  const [beta, setBeta] = useState(0);
  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const crno = useParams();

  useEffect(() => {
    (async () => {
      sampleJson("035420", "price")
        .then((res) => res.data)
        .then((data) => setDataX(data));
      sampleJson(crno.stockId, "price")
        .then((res) => res.data)
        .then((data) => setDataY(data));
    })();
    return () => {
      setDataX({});
      setDataY({});
    };
  }, []);

  useEffect(() => {
    if (Object.keys(dataX).length && Object.keys(dataY).length) {
      const { itmsNm: xName, items: xData } = dataX;
      const { itmsNm: yName, items: yData } = dataY;
      setNames([xName, yName]);

      const mergedArray = xData.reduce(
        (a, b, i) =>
          a.concat({
            basDt: xData[i]["basDt"],
            xPrice: xData[i]["close"],
            yPrice: yData[i]["close"],
          }),
        [],
      );
      setData(mergedArray);
      setBeta(betaCoeff(xData, yData));
      setLoading(false);
    }
  }, [dataX, dataY]);

  return (
    <RouteWrapper>
      <StatisticsHeader />
      <ContentWrapper>
        <ChartWrapper>
          {loading ? (
            <HashLoader color={"#48a185"} size={50} />
          ) : (
            <BetaChart data={data} names={names} beta={beta} />
          )}
        </ChartWrapper>
        <TableWrapper>
          {loading ? (
            <HashLoader color={"#48a185"} size={50} />
          ) : (
            <TableHeader data={beta} title={"BETA"} />
          )}
          {loading ? (
            <HashLoader color={"#48a185"} size={50} />
          ) : (
            <BetaTable data={data} names={names} />
          )}
        </TableWrapper>
      </ContentWrapper>
    </RouteWrapper>
  );
};

export default DoBeta;
