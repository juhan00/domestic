import { useEffect, useRef } from "react";

function usePrevValue(value) {
  const prevRef = useRef(null);

  useEffect(() => {
    prevRef.current = value;
  });

  return prevRef.current;
}

export default usePrevValue;
