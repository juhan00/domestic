import axios from "redaxios";

const BASE_URL = "https://gyoheonlee.github.io/mobile-bank/data/api";
const OPEN_API_URL =
  "http://apis.data.go.kr/1160100/service/GetFinaStatInfoService/getIncoStat";

const ENKEY =
  "cu0lcgBuH%2FrN634Xo5zS%2FItAfe5NoB0Q0q8t%2B9nYUT5PCyzjdFM%2BOyYSTQ2Isq699SntDlAXR7raszep80BWkw%3D%3D";
const DEKEY =
  "cu0lcgBuH/rN634Xo5zS/ItAfe5NoB0Q0q8t+9nYUT5PCyzjdFM+OyYSTQ2Isq699SntDlAXR7raszep80BWkw==";

export function sampleJson(field) {
  const json = axios.get(`${BASE_URL}/${field}.json`).catch((error) => {
    console.log("error");
  });

  return json;
}

export function sampleComInfoJson() {
  const json = axios({
    method: "get",
    url: OPEN_API_URL,
    params: {
      serviceKey: ENKEY,
      numOfRows: 1,
      pageNo: 1,
      resultType: "json",
      crno: 1101111848914,
      bizYear: 2018,
    },
  }).catch((error) => {
    console.log("error");
  });

  return json;
}
