import { useEffect, useState } from "react";

const getSkeletonCount = () => {
  const width = window.innerWidth;

  if (width < 640) return 4;     
  if (width < 1024) return 6;     
  if (width < 1280) return 9;     
  return 12;                      
};

export const useSkeletonCount = () => {
  const [count, setCount] = useState(getSkeletonCount());

  useEffect(() => {
    const onResize = () => setCount(getSkeletonCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return count;
};
