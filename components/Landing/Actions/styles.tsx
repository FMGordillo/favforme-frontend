import styled from "styled-components";
import { Title } from "../../styles";

/**
 * @deprecated Improve this or use another thing
 */
export const MainContent = styled.div``;

/**
 * @deprecated Improve this or use another thing
 */
export const TitleContainer = styled.div``;

/**
 * @description Styled from Title (h1)
 */
export const StyledTitle = styled(Title)`
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

/**
 * @description Styled from h2
 */
export const AmountCollected = styled.h2`
  font-weight: normal;
  color: ${({ theme }) => theme.color.gray.dark};
  font-size: 2.25em;
  margin: 0;
`;

export const AmountSubtitle = styled.p`
  color: ${({ theme }) => theme.color.gray.dark};
  margin-top: 0;
`;

export const Percentage = styled.p`
  color: green;
  margin: 0;
  font-size: 1.25em;
  font-weight: bold;
`;

export const SocialNetworks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grip-gap: 1em;
  & > svg {
    width: 32px !important;
    height: 32px !important;
  }
`;

/**
 * @description Progress bar container (needs a \<progress\>)
 */
export const ProgressBar = styled.div`
  progress[value] {
    background-color: transparent;
    width: 420px;
    appearance: none;
    height: 12px;
    border: 2px solid ${({ theme }) => theme.color.gray.dark};

    ::-webkit-progress-bar {
      background-color: transparent;
      width: 420px;
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

    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 180px;
      ::-webkit-progress-bar {
        width: 180px;
      }
    }}
  }
`;
