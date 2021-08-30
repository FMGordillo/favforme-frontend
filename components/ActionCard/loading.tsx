import {
  AmountCollected,
  AmountSubtitle,
  ButtonContainer,
  Container,
  MainContent,
  Percentage,
  ProgressBar,
  Title,
} from "./styles";
import { FunctionComponent } from "react";
import Loadable from "react-loading-skeleton";
import { SocialNetworks } from "@/components";

const LoadingActionCard: FunctionComponent = () => {
  return (
    <Container>
      <Loadable height={200} />
      <MainContent>
        <div>
          <Title>
            <Loadable />
          </Title>
        </div>
        <AmountCollected>
          <Loadable />
        </AmountCollected>
        <AmountSubtitle>
          <Loadable />
        </AmountSubtitle>
        <ProgressBar>
          <Loadable />
        </ProgressBar>
        <Percentage>
          <Loadable />
        </Percentage>
        <ButtonContainer>
          <Loadable height={60} />
          <Loadable height={60} />
        </ButtonContainer>
        <SocialNetworks />
      </MainContent>
    </Container>
  );
};

export { LoadingActionCard as LoadingAction };
