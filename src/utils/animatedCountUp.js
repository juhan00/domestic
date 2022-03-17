import React from "react";
import { useCountUp } from "react-countup";

export const CountUpNumber = ({ to, size, color }) => {
  const { number } = useCountUp({
    ref: "counter",
    start: 0,
    end: to,
    duration: 1,
    separator: ",",
  });

  return (
    <span
      id="counter"
      style={{
        fontWeight: 700,
        fontSize: size,
        color: color,
      }}>
      {number}
    </span>
  );
};

export default CountUpNumber;
