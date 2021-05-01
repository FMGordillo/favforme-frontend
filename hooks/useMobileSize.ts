import { calculateBreakpoint } from "@/utils/styled";
import { useEffect, useState } from "react";

interface UseMobileSizeReturn {
  isMobileSize: boolean;
}

export const useMobileSize = (): UseMobileSizeReturn => {
  const mobileSize = Number(calculateBreakpoint("md").replace("px", ""));
  const [isMobileSize, setIsMobileSize] = useState<boolean>(
    typeof window !== "undefined" && window.innerWidth <= mobileSize
  );

  useEffect(() => {
    const updateWindowWidth = () => {
      if (!isMobileSize && window.innerWidth <= mobileSize)
        setIsMobileSize(true);
      else if (isMobileSize && window.innerWidth > mobileSize)
        setIsMobileSize(false);

      console.log(isMobileSize);
    };

    if (window) {
      window.addEventListener("resize", updateWindowWidth);
    }

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [isMobileSize]);

  return {
    isMobileSize,
  };
};
