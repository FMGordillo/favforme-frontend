import { Action, Button, Carousel } from "@/components";
import { Container, Title } from "@/components/styles";
import { ActionI } from "@/lib/types";
import { FunctionComponent } from "react";
import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/router";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  background: ${({ theme }) => theme.palette.primary.main};
`;

const StyledTitle = styled(Title)`
  color: white;
  padding: 0 0.25em;
  margin: 2em 0 1em;
`;

interface ActionsProps {
  loading: boolean;
  actions?: ActionI[];
}

const ActionsComponent: FunctionComponent<ActionsProps> = ({
  actions,
  loading,
}) => {
  const embla = useEmblaCarousel();
  const router = useRouter();

  return (
    <StyledContainer id="actions">
      <StyledTitle>Acciones destacadas</StyledTitle>
      <span>{loading}</span>
      <Carousel
        embla={embla}
        elements={
          actions && actions.length > 0
            ? actions.map((action, i) => ({
                key: i,
                component: <Action carousel data={action} />,
              }))
            : []
        }
      />
      <Button
        color="white"
        textColor="#2142d2"
        onClick={() => router.push("/acciones")}
        style={{ marginTop: "2em", marginBottom: "2em" }}
        hoverColor="primary"
        hoverTextColor="black"
        hoverVariant="light"
      >
        Ver todas las acciones
      </Button>
    </StyledContainer>
  );
};

export { ActionsComponent };
