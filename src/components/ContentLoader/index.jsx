import React from "react";
import ContentLoader from "react-content-loader";

const backgroundColorValue = "#e4e4e4";
const foregroundColorValue = "#f1f0f0";
const speedValue = 2;

//bar chart
const BarChart = (props) => {
  return (
    <ContentLoader
      speed={speedValue}
      width="100%"
      height="100%"
      viewBox="0 0 145 280"
      // preserveAspectRatio="none"
      backgroundColor={backgroundColorValue}
      foregroundColor={foregroundColorValue}
      {...props}>
      <rect x="0" y="160" rx="0" ry="0" width="25" height="40" />
      <rect x="30" y="145" rx="0" ry="0" width="25" height="55" />
      <rect x="60" y="126" rx="0" ry="0" width="25" height="74" />
      <rect x="90" y="80" rx="0" ry="0" width="25" height="120" />
      <rect x="120" y="142" rx="0" ry="0" width="25" height="58" />
    </ContentLoader>
  );
};
BarChart.metadata = {
  name: "Phuong Dao",
  github: "dao-phuong",
  description: "Bar Chart",
  filename: "BarChart",
};

//table List
const TableList = (props) => {
  return (
    <ContentLoader
      speed={speedValue}
      width="100%"
      height="100%"
      viewBox="0 0 1200 400"
      backgroundColor={backgroundColorValue}
      foregroundColor={foregroundColorValue}
      {...props}>
      <text x="150" y="20" style={{ font: "bold 30px sans-serif" }}>
        Loading...
      </text>
      <rect x="27" y="139" rx="4" ry="4" width="20" height="20" />
      <rect x="67" y="140" rx="10" ry="10" width="85" height="19" />
      <rect x="188" y="141" rx="10" ry="10" width="169" height="19" />
      <rect x="402" y="140" rx="10" ry="10" width="85" height="19" />
      <rect x="523" y="141" rx="10" ry="10" width="169" height="19" />
      <rect x="731" y="139" rx="10" ry="10" width="85" height="19" />
      <rect x="852" y="138" rx="10" ry="10" width="85" height="19" />
      <rect x="978" y="138" rx="10" ry="10" width="169" height="19" />

      <rect x="26" y="196" rx="4" ry="4" width="20" height="20" />
      <rect x="66" y="197" rx="10" ry="10" width="85" height="19" />
      <rect x="187" y="198" rx="10" ry="10" width="169" height="19" />
      <rect x="401" y="197" rx="10" ry="10" width="85" height="19" />
      <rect x="522" y="198" rx="10" ry="10" width="169" height="19" />
      <rect x="730" y="196" rx="10" ry="10" width="85" height="19" />
      <rect x="851" y="195" rx="10" ry="10" width="85" height="19" />
      <rect x="977" y="195" rx="10" ry="10" width="169" height="19" />

      <rect x="26" y="258" rx="4" ry="4" width="20" height="20" />
      <rect x="66" y="259" rx="10" ry="10" width="85" height="19" />
      <rect x="187" y="260" rx="10" ry="10" width="169" height="19" />
      <rect x="401" y="259" rx="10" ry="10" width="85" height="19" />
      <rect x="522" y="260" rx="10" ry="10" width="169" height="19" />
      <rect x="730" y="258" rx="10" ry="10" width="85" height="19" />
      <rect x="851" y="257" rx="10" ry="10" width="85" height="19" />
      <rect x="977" y="257" rx="10" ry="10" width="169" height="19" />

      <rect x="26" y="316" rx="4" ry="4" width="20" height="20" />
      <rect x="66" y="317" rx="10" ry="10" width="85" height="19" />
      <rect x="187" y="318" rx="10" ry="10" width="169" height="19" />
      <rect x="401" y="317" rx="10" ry="10" width="85" height="19" />
      <rect x="522" y="318" rx="10" ry="10" width="169" height="19" />
      <rect x="730" y="316" rx="10" ry="10" width="85" height="19" />
      <rect x="851" y="315" rx="10" ry="10" width="85" height="19" />
      <rect x="977" y="315" rx="10" ry="10" width="169" height="19" />

      <rect x="26" y="379" rx="4" ry="4" width="20" height="20" />
      <rect x="66" y="380" rx="10" ry="10" width="85" height="19" />
      <rect x="187" y="381" rx="10" ry="10" width="169" height="19" />
      <rect x="401" y="380" rx="10" ry="10" width="85" height="19" />
      <rect x="522" y="381" rx="10" ry="10" width="169" height="19" />
      <rect x="730" y="379" rx="10" ry="10" width="85" height="19" />
      <rect x="851" y="378" rx="10" ry="10" width="85" height="19" />
      <rect x="977" y="378" rx="10" ry="10" width="169" height="19" />

      <circle cx="37" cy="97" r="11" />
      <rect x="26" y="23" rx="5" ry="5" width="153" height="30" />
      <circle cx="77" cy="96" r="11" />
    </ContentLoader>
  );
};

TableList.metadata = {
  name: "Shaheer Ali",
  github: "itsmeshaheerali",
  description:
    "This loader exactly fit inside your bootrstrap card component no override happens like existing DataTable Loader",
  filename: "BootstrapCardDataTable",
};

//form list
const FromList = (props) => {
  return (
    <ContentLoader
      speed={speedValue}
      width="100%"
      height="100%"
      viewBox="0 0 400 200"
      backgroundColor={backgroundColorValue}
      foregroundColor={foregroundColorValue}
      {...props}>
      <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
      <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
      <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
      <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
      <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
      <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
      <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
      <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
      <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
      <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
      <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
    </ContentLoader>
  );
};

FromList.metadata = {
  name: "Chris Fulgencio", // Contributer
  github: "fulgencc", // Github username
  description: "Small form", // Little tagline
  filename: "Form", // filename
};

export { BarChart, TableList, FromList };