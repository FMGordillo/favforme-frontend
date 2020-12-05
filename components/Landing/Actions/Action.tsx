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
import { Button, Title } from "../../styles";

interface ActionProps {
  data?: ActionI;
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  grid-gap: 2em;
  background: ${({ theme }) => theme.color.gray.light};
`;
const MainContent = styled.div``;
const TitleContainer = styled.div``;
const StyledTitle = styled(Title)`
  font-size: 2.25em;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 0.25em;
  color: ${({ theme }) => theme.color.primary.main};
  transition: all 300ms;
  :hover {
    text-decoration: underline;
  }
`;
const AmountCollected = styled.h2`
  font-weight: normal;
  color: ${({ theme }) => theme.color.gray.main};
  font-size: 2.25em;
  margin: 0;
`;
const AmountSubtitle = styled.p`
  color: ${({ theme }) => theme.color.gray.main};
  margin-top: 0;
`;
const Percentage = styled.p`
  color: green;
  margin: 0;
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
    border: 2px solid ${({ theme }) => theme.color.gray.dark};

    ::-webkit-progress-bar {
      background-color: transparent;
      width: ${(props) => props.width};
      appearance: none;
      height: 12px;
      border: 2px solid ${({ theme }) => theme.color.gray.dark};
    }

    ::-webkit-progress-value {
      background-color: ${({ theme }) => theme.color.gray.main};
    }

    ::-moz-progress-bar {
      background-color: ${({ theme }) => theme.color.gray.main};
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
            width={1400}
            height={1100}
          />
        </div>
      </Link>
      <MainContent>
        <TitleContainer>
          <Link href={`/acciones/${data.id}`}>
            <StyledTitle>{data.title.toUpperCase()}</StyledTitle>
          </Link>
        </TitleContainer>
        <AmountCollected>
          ${parseToCurrency(currentAmount)}
          .-
        </AmountCollected>
        <AmountSubtitle>
          aportando voluntariamente de ${parseToCurrency(finalAmount)}
        </AmountSubtitle>
        {/* TODO: FIX THIS */}
        <ProgressBar width="420px">
          <progress
            max="100"
            value={((currentAmount * 100) / finalAmount).toFixed()}
          ></progress>
        </ProgressBar>
        <Percentage>
          {((currentAmount * 100) / finalAmount).toFixed()}%
        </Percentage>
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
