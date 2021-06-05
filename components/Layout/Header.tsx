import { Button, NavBar } from "@/components";
import { useMobileSize } from "@/hooks/useMobileSize";
import { event } from "@/lib/gtag";
import { useRouter } from "next/router";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header<{ isIndex?: boolean }>`
  background-size: cover;
  background-position: center;
  background-image: url("/images/plato_de_comida.png");
  height: ${({ isIndex }) => (isIndex ? "600px" : "400px")};
  width: 100vw;
  overflow: hidden;

  /* Workaround? */
  display: table-cell;
  vertical-align: bottom;
  padding-bottom: 2em;

  transition: height 300ms;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: ${({ isIndex }) => (isIndex ? "400px" : "300px")};
  }
`;
const TextContainer = styled.div<{ isIndex?: boolean }>`
  color: white;
  padding: ${({ theme, isIndex }) =>
    !isIndex ? "0" : `0 0 0 ${theme.spacing(2)}em`};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
    padding-left: 2em;
  }
`;
const Title = styled.h1<{ receivedText?: boolean; isIndex?: boolean }>`
  margin: 0;
  font-size: 3.5em;
  text-overflow: ellipsis;
  overflow: hidden;
  width: ${({ isIndex }) => (isIndex ? "75vw" : "inherit")};
  text-align: ${({ isIndex }) => (isIndex ? "left" : "center")};
`;
const Subtitle = styled.h2`
  font-family: abel, sans-serif;
  margin-top: 0;
  font-weight: 400;
`;

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
