import axios from "redaxios";

const BASE_URL = "https://gyoheonlee.github.io/mobile-bank/data/api";

export function sampleJson(field) {
  const json = axios.get(`${BASE_URL}/${field}.json`).catch((error) => {
    console.log("error");
  });
  return json;
}
