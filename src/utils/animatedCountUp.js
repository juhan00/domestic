import React from "react";
import { useCountUp } from "react-countup";

export const animatedCountUp = (to) => {
  const { number } = useCountUp({
    ref: "counter",
    start: 0,
    end: to,
    duration: 1,
    separator: ",",
  });

  return <span id="counter">{number}</span>;
};

export default animatedCountUp;
