import React, { useEffect, useState } from "react";
import TableHeader from "@components/Table/TableHeader";
import BetaTable from "@components/Table/BetaTable";
import BetaChart from "@components/BetaChart";
import { RouteWrapper, ChartWrapper } from "./style";
import { sampleJson } from "@utils/api";

const DoBeta = () => {
  const [dataX, setDataX] = useState({});
  const [dataY, setDataY] = useState({});
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
      setLoading(false);
    }
  }, [dataX, dataY]);

  return (
    <RouteWrapper>
      {/* {!loading && <BetaTable data={data} names={names} />} */}
      <div>
        <TableHeader data={100} title={"BETA"} />
        <BetaTable data={data} names={names} />
      </div>
      <ChartWrapper>
        <section>OPTIONS</section>
        {!loading && <BetaChart data={data} names={names} />}
      </ChartWrapper>
    </RouteWrapper>
  );
};

export default DoBeta;
