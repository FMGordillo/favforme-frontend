import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calculateBreakpoint } from "lib/styled";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Action as ActionI } from "../../../lib/data";
import { Button, Container, Title } from "../styles";

interface ActionProps {
  data?: ActionI;
}

const StyledContainer = styled(Container)`
  display: grid;
  align-items: center;
  grid-template-columns: 50px 1fr 50px;
  min-width: ${calculateBreakpoint("md")};
`;
const MainContent = styled.div``;
const SocialNetworks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grip-gap: 1em;
  & > svg {
    width: 32px;
  }
`;
const ProgressBar = styled.div<{ width?: string }>`
  progress[value] {
    width: ${(props) => props.width};
    appearance: none;
    background-color: red;
    height: 12px;
    border-radius: 20px;

    ::-webkit-progress-bar {
      background-color: red;
      width: ${(props) => props.width};
      appearance: none;
      background-color: red;
      height: 12px;
      border-radius: 20px;
    }

    ::-webkit-progress-value {
      background-color: blue;
      border-radius: 20px;
    }

    ::-moz-progress-bar {
      background-color: blue;
      border-radius: 20px;
    }
  }
`;
const StyledTitle = styled(Title)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.secondary.main};
`;

const Action: FunctionComponent<ActionProps> = ({ data }) => {
  const currentAmount = data.objective.current.amount;
  const finalAmount = data.objective.final.amount;

  return (
    <StyledContainer>
      <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      <MainContent>
        <Link href={`/acciones/${data.id}`}>
          <StyledTitle>{data.title.toUpperCase()}</StyledTitle>
        </Link>
        <span>
          Porcentaje completo: {((currentAmount * 100) / finalAmount).toFixed()}
          %
        </span>
        <p>${currentAmount}</p>
        <ProgressBar width="100%">
          <progress
            max="100"
            value={((currentAmount + 5000 * 100) / finalAmount).toFixed()}
          ></progress>
        </ProgressBar>
        <p>aportando voluntariamente de ${finalAmount}</p>
        <Button>Favorecer esta acción</Button>
        <SocialNetworks>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTwitter} />
        </SocialNetworks>
      </MainContent>
      <FontAwesomeIcon icon={faArrowAltCircleRight} />
    </StyledContainer>
  );
};

export { Action };
