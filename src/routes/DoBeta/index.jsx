import React, { useEffect, useState } from "react";
import TableHeader from "@components/Table/TableHeader";
import BetaTable from "@components/Table/BetaTable";
import BetaChart from "@components/BetaChart";
import {
  RouteWrapper,
  SemiHeader,
  ContentWrapper,
  InputWrapper,
  TableWrapper,
  ChartWrapper,
} from "./style";
import { sampleJson } from "@utils/api";
import betaCoeff from "@utils/corrCoeff";

const DoBeta = () => {
  const [dataX, setDataX] = useState({});
  const [dataY, setDataY] = useState({});
  const [beta, setBeta] = useState(0);
  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      sampleJson("xData")
        .then((res) => res.data)
        .then((data) => setDataX(data));
      sampleJson("yData")
        .then((res) => res.data)
        .then((data) => setDataY(data));
    })();
    return () => {
      setDataX({})
      setDataY({})
    }
  }, []);

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
      setBeta(betaCoeff(xData, yData));
      setLoading(false);
    }
  }, [dataX, dataY]);

  return (
    <RouteWrapper>
      <SemiHeader>
        <h1>회귀 그래프(Regression Graph)</h1>
        <InputWrapper>
          <input type="date" name="date" />
          ~
          <input type="date" name="date" />
        </InputWrapper>
      </SemiHeader>
      <ContentWrapper>
        <ChartWrapper>
          {!loading && <BetaChart data={data} names={names} beta={beta} />}
        </ChartWrapper>
        <TableWrapper>
          <TableHeader data={beta} title={"BETA"} />
          <BetaTable data={data} names={names} />
        </TableWrapper>
      </ContentWrapper>
    </RouteWrapper>
  );
};

export default DoBeta;
