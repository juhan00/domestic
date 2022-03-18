import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import TableHeader, { TableHeaderLoader } from "@components/Table/TableHeader";
import BetaTable, { BetaTableLoader } from "@components/Table/BetaTable";
import BetaChart from "@components/BetaChart";
import StatisticsHeader from "@components/Table/StatisticsHeader";
import {
  RouteWrapper,
  ContentWrapper,
  TableWrapper,
  ChartWrapper,
} from "./style";
import { sampleJson } from "@utils/api";
import betaCoeff from "@utils/corrCoeff";
import { HashLoader } from "react-spinners";

const DoBeta = () => {
  const [dataX, setDataX] = useState({});
  const [dataY, setDataY] = useState({});
  const [beta, setBeta] = useState(0);
  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const crno = useParams();
  const xTick = useLocation().search.slice(1);

  //box loader animation state
  const [isBoxLoader, setIsBoxLoader] = useState(false);

  //box loader aninmation useEffect
  useEffect(() => {
    setIsBoxLoader(true);
    return () => setIsBoxLoader(false);
  }, []);

  useEffect(() => {
    (async () => {
      sampleJson(xTick.toLowerCase(), "price")
        .then((res) => res.data)
        .then((data) =>
          setTimeout(() => {
            setDataX(data);
          }, 1000),
        );
      sampleJson(crno.stockId.toLowerCase(), "price")
        .then((res) => res.data)
        .then((data) =>
          setTimeout(() => {
            setDataY(data);
          }, 1000),
        );
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
      setBeta(betaCoeff(xData, yData));
      setLoading(false);
    }
  }, [dataX, dataY]);

  return (
    <RouteWrapper>
      <StatisticsHeader />
      <ContentWrapper className={`box_ani turn1 ${isBoxLoader && "ani_on"}`}>
        <ChartWrapper>
          {loading ? (
            <div className="hash_loader_wrapper">
              <HashLoader color={"#48a185"} size={50} />
            </div>
          ) : (
            <BetaChart data={data} names={names} beta={beta} />
          )}
        </ChartWrapper>
        <TableWrapper>
          {loading ? (
            <div className={`box_ani delay1 turn1 ${isBoxLoader && "ani_on"}`}>
              <TableHeaderLoader />
            </div>
          ) : (
            <TableHeader data={beta} title={"BETA"} />
          )}
          {loading ? (
            <div className={`box_ani delay1 turn2 ${isBoxLoader && "ani_on"}`}>
              <BetaTableLoader />
            </div>
          ) : (
            <BetaTable data={data} names={names} />
          )}
        </TableWrapper>
      </ContentWrapper>
    </RouteWrapper>
  );
};

export default DoBeta;
