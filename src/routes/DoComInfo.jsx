import React from "react";
import Table from "../components/Domestic/ComInfo/Table";
import ComInfoHeader from "../components/Domestic/ComInfo/ComInfoHeader";
import ComInfoGraph from "../components/Domestic/ComInfo/ComInfoGraph";
import ComInfoDailyPrice from "../components/Domestic/ComInfo/ComInfoDailyPrice";
import axios from "redaxios";
import { useEffect } from "react";

const DoComInfo = () => {
  const BASE_URL =
    "http://apis.data.go.kr/1160100/service/GetFinaStatInfoService/getIncoStat";
  const ENKEY =
    "cu0lcgBuH%2FrN634Xo5zS%2FItAfe5NoB0Q0q8t%2B9nYUT5PCyzjdFM%2BOyYSTQ2Isq699SntDlAXR7raszep80BWkw%3D%3D";
  const DEKEY =
    "cu0lcgBuH/rN634Xo5zS/ItAfe5NoB0Q0q8t+9nYUT5PCyzjdFM+OyYSTQ2Isq699SntDlAXR7raszep80BWkw==";
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: BASE_URL,
  //     params: {
  //       serviceKey: DEKEY,
  //       numOfRows: 1,
  //       pageNo: 1,
  //       resultType: "json",
  //       crno: 1101111848914,
  //       bizYear: 2018,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((x) => console.log(x));
  // }, []);

  return (
    <>
      <ComInfoHeader />
      <section style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ComInfoGraph />
          <ComInfoDailyPrice />
        </div>
        <Table />
      </section>
    </>
  );
};

export default DoComInfo;
