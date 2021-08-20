import { FunctionComponent } from "react";
import Image from "next/image";

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
      width={width}
      height={height}
      alt="FavForMe logo"
      src={`/images/favforme_logo${type === "white" ? "_white" : ""}.webp`}
    />
  );
};
