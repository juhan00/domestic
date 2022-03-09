import React, { useEffect, useState } from "react";
import BetaTable from "@components/BetaTable";
import BetaChart from "@components/BetaChart";
import { domesticSample } from "@utils/statisticsData";
import { RouteWrapper, ChartWrapper } from "./style";
import { sampleJson } from "@utils/api";

const DoBeta = () => {
  const [dataX, setDataX] = useState({});
  const [dataY, setDataY] = useState({});
  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const resX = await sampleJson("xData");
  //     setDataX(resX.data);
  //     setLoading1(false);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const resY = await sampleJson("yData");
  //     setDataY(resY.data);
  //     setLoading2(false);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      sampleJson("xData")
        .then((res) => res.data)
        .then((data) => setDataX(data));
      sampleJson("yData")
        .then((res) => res.data)
        .then((data) => setDataY(data))
        .then(() => setLoading(false));
    })();
  }, []);

  useEffect(() => {
    if (!loading) {
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
      setLoading2(false);
    }
  }, [dataX, loading]);

  return (
    <RouteWrapper>
      {!loading2 && <BetaTable data={data} names={names} />}
      <ChartWrapper>
        <section>OPTIONS</section>
        {!loading2 && <BetaChart data={data} names={names} />}
      </ChartWrapper>
    </RouteWrapper>
  );
};

export default DoBeta;
