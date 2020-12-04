import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Action as ActionI, parseToCurrency } from "../../../lib/data";
import { Button, Container, Title } from "../../styles";

interface ActionProps {
  data?: ActionI;
}

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  grid-gap: 1em;
`;
const MainContent = styled.div``;
const StyledTitle = styled(Title)`
  font-size: 2.25em;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 0.25em;
  color: ${({ theme }) => theme.color.secondary.dark};
  border-bottom: 1px solid transparent;
  transition: all 300ms;
  :hover {
    border-color: ${({ theme }) => theme.color.secondary.dark};
  }
`;
const TitleContainer = styled.div``;
const AmountCollected = styled.h2`
  font-size: 2.25em;
  margin-bottom: 0;
`;
const AmountSubtitle = styled.p`
  color: ${({ theme }) => theme.color.gray};
  margin-top: 0;
`;
const Percentage = styled.span`
  font-size: 1.25em;
  font-weight: bold;
`;
const SocialNetworks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grip-gap: 1em;
  & > svg {
    width: 32px !important;
    height: 32px !important;
  }
`;
const ProgressBar = styled.div<{ width?: string }>`
  progress[value] {
    background-color: transparent;
    width: ${(props) => props.width};
    appearance: none;
    height: 12px;
    border: 2px solid ${({ theme }) => theme.color.secondary.dark};
    border-radius: 20px;

    ::-webkit-progress-bar {
      background-color: transparent;
      width: ${(props) => props.width};
      appearance: none;
      height: 12px;
      border: 2px solid ${({ theme }) => theme.color.secondary.dark};
      border-radius: 20px;
    }

    ::-webkit-progress-value {
      background-color: ${({ theme }) => theme.color.secondary.main};
      border-radius: 20px;
    }

    ::-moz-progress-bar {
      background-color: ${({ theme }) => theme.color.secondary.main};
      border-radius: 20px;
    }
  }
`;
const StyledButton = styled(Button)`
  margin: 1em 0;
`;

const Action: FunctionComponent<ActionProps> = ({ data }) => {
  const currentAmount = data.objective.current.amount;
  const finalAmount = data.objective.final.amount;

  return (
    <StyledContainer>
      <Link href={`/acciones/${data.id}`}>
        <div>
          <Image
            src={data.imageSrc}
            layout="responsive"
            width={800}
            height={500}
          />
        </div>
      </Link>
      <MainContent>
        <TitleContainer>
          <Link href={`/acciones/${data.id}`}>
            <StyledTitle>{data.title.toUpperCase()}</StyledTitle>
          </Link>
        </TitleContainer>
        <Percentage>
          {((currentAmount * 100) / finalAmount).toFixed()}%
        </Percentage>
        <AmountCollected>
          ${parseToCurrency(currentAmount)}
          .-
        </AmountCollected>
        <AmountSubtitle>
          aportando voluntariamente de ${parseToCurrency(finalAmount)}
        </AmountSubtitle>
        <ProgressBar width="100%">
          <progress
            max="100"
            value={((currentAmount * 100) / finalAmount).toFixed()}
          ></progress>
        </ProgressBar>
        <StyledButton>Favorecer esta acción</StyledButton>
        <SocialNetworks>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTwitter} />
        </SocialNetworks>
      </MainContent>
    </StyledContainer>
  );
};

export { Action };
