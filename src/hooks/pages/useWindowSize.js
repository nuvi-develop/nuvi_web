import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const isClient = typeof window === "object";

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  });

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (!isClient) return false;
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export const useColNumber = colWidth => {
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;
  const [colNumber, setColNumber] = useState(7);

  useEffect(() => {
    const Col = parseInt(windowWidth / colWidth);
    setColNumber(Col);
  }, [windowWidth, colWidth]);
  return colNumber;
};
