import Image from "next/image";
import { FunctionComponent } from "react";

interface LogoProps {
  type?: "black" | "white";
  width?: number | string;
  height?: number | string;
}

export const Logo: FunctionComponent<LogoProps> = ({
  type = "white",
  width = 270,
  height = 214,
}) => {
  return (
    <Image
      src={`/images/favforme_logo${type === "white" ? "_white.webp" : ".webp"}`}
      width={width}
      height={height}
    />
  );
};