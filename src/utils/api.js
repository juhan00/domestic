import axios from "redaxios";

const BASE_URL = "https://gyoheonlee.github.io/mobile-bank/data/";

export function sampleJson(crno, item) {
  const json = axios.get(`${BASE_URL}/${crno}/${item}.json`).catch((error) => {
    console.log("error");
  });

  return json;
}

export function sampleComInfoJson() {
  const json = axios.get(`${BASE_URL}/${field}.json`).catch((error) => {
    console.log("error");
  });

  return json;
}
