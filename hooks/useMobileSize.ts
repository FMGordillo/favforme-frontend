import { Breakpoint, calculateBreakpoint } from "@/utils/styled";
import { useEffect, useState } from "react";

interface UseMobileSizeReturn {
  isMobileSize: boolean;
}

export const useMobileSize = (breakpoint?: Breakpoint): UseMobileSizeReturn => {
  const mobileSize = Number(
    calculateBreakpoint(breakpoint || "md").replace("px", "")
  );
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileSize]);

  return {
    isMobileSize,
  };
};
