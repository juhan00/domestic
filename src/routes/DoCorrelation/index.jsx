import React, { useEffect, useState } from "react";
import TableHeader from "@components/Table/TableHeader";
import CorrelationTable, {
  CorrelationTableLoader,
} from "@components/Table/CorrelationTable";
import CorrelationChart from "@components/CorrelationChart";
import StatisticsHeader, {
  StatisticsHeaderLoader,
} from "@components/Table/StatisticsHeader";
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
import { HashLoader } from "react-spinners";

const DoCorrelation = () => {
  const [dataX, setDataX] = useState({});
  const [dataY, setDataY] = useState({});
  const [corr, setCorr] = useState(0);
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
        <ChartWrapper className={`box_ani turn1 ${isBoxLoader && "ani_on"}`}>
          {loading ? (
            <div className="hash_loader_wrapper">
              <HashLoader color={"#48a185"} size={50} />
            </div>
          ) : (
            <CorrelationChart corr={corr} names={names} />
          )}
        </ChartWrapper>
        <TableWrapper>
          {loading ? (
            <div className={`box_ani delay1 turn1 ${isBoxLoader && "ani_on"}`}>
              <StatisticsHeaderLoader />
            </div>
          ) : (
            <TableHeader data={corr[0]["corr"]} title={"CORRELATION"} />
          )}
          {loading ? (
            <div className={`box_ani delay1 turn2 ${isBoxLoader && "ani_on"}`}>
              <CorrelationTableLoader />
            </div>
          ) : (
            <CorrelationTable data={corr} />
          )}
        </TableWrapper>
      </ContentWrapper>
    </RouteWrapper>
  );
};

export default DoCorrelation;
