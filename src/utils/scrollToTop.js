import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return null;
};

export default ScrollToTop;
