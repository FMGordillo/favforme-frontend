import { ButtonLink, Title } from "@/components";
import { FunctionComponent } from "react";
import Link from "next/link";
import { event } from "@/lib/gtag";
import styled from "styled-components";

const JoinUsContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ProposeMyONG: FunctionComponent = () => {
  return (
    <JoinUsContainer>
      <Title color="secondary" weight="bold">
        ¿Tenés una ONG?
      </Title>
      <p>
        Si sos una ONG es hora de potenciar tu esfuerzo con FavForMe.
        <br />
        Hagamos juntos un lugar mejor para vivir.
      </p>
      <Link href="/ong/sumar-ong">
        <ButtonLink
          onClick={() =>
            event({ action: "sumar_mi_ong", category: "ong", value: 1 })
          }
          color="secondary"
          hoverTextColor="black"
        >
          Sumar mi ONG
        </ButtonLink>
      </Link>
    </JoinUsContainer>
  );
};
