import {
  Button,
  HeaderContainer,
  Subtitle,
  TextContainer,
  Title,
} from "./styles";
import { FunctionComponent, ReactNode } from "react";
import { NavBar } from "@/components";
import { event } from "@/lib/gtag";
import { useMobileSize } from "@/service/useMobileSize";
import { useRouter } from "next/router";

export interface HeaderProps {
  isIndex?: boolean;
  title?: ReactNode | string;
  subtitle?: ReactNode | string;
}

const Header: FunctionComponent<HeaderProps> = ({
  isIndex,
  title,
  subtitle,
}) => {
  const router = useRouter();
  const { isMobileSize } = useMobileSize("md");
  const handleClick = () => {
    event({
      action: "click_dona_hoy",
      category: "donacion",
      value: 1,
    });
    router.push("/acciones");
  };
  return (
    <>
      <NavBar />
      <HeaderContainer isIndex={!!isIndex}>
        <TextContainer isIndex={!!isIndex}>
          <Title
            isIndex={!!isIndex}
            receivedText={typeof title !== "undefined"}
          >
            {title ||
              (!isMobileSize ? (
                <span>
                  Hay muchas personas
                  <br />
                  <mark>necesitando</mark> de tu
                  <br />
                  buena acción
                </span>
              ) : (
                <span>FavForMe</span>
              ))}
          </Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {isIndex && (
            <Button textColor="#111" color="secondary" onClick={handleClick}>
              DON&Aacute; HOY
            </Button>
          )}
        </TextContainer>
      </HeaderContainer>
    </>
  );
};

export { Header };
