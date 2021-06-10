import { Button, NavBar } from "@/components";
import { useMobileSize } from "@/hooks/useMobileSize";
import { event } from "@/lib/gtag";
import { useRouter } from "next/router";
import { FunctionComponent, ReactNode } from "react";
import { HeaderContainer, Subtitle, TextContainer, Title } from "./styles";

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
      <HeaderContainer isIndex={isIndex}>
        <TextContainer isIndex={isIndex}>
          <Title receivedText={typeof title !== "undefined"} isIndex={isIndex}>
            {title ||
              (!isMobileSize ? (
                <span>
                  Hay muchas personas
                  <br />
                  necesitando de tu
                  <br />
                  buena acción
                </span>
              ) : (
                <span>FavForMe</span>
              ))}
          </Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {isIndex && (
            <Button
              style={{ width: "200px", margin: "1.5em 0" }}
              textColor="#111"
              color="secondary"
              onClick={handleClick}
            >
              DON&Aacute; HOY
            </Button>
          )}
        </TextContainer>
      </HeaderContainer>
    </>
  );
};

export { Header };
