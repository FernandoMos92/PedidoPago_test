import { useState, useEffect } from 'react';

type FormatSize = {
  width: number,
  height: number
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<FormatSize>({ width: 950, height: 950 });
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};