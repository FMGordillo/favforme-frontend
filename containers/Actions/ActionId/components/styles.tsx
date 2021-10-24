import {
  AmountCollected as BaseAmountCollected,
  AmountSubtitle as BaseAmountSubtitle,
  Percentage as BasePercentage,
} from "@/components/ActionCard/styles";
import styled from "styled-components";

export const Summary = styled.div`
  display: grid;
  grid-gap: 1em;
  h2 {
    font-size: 2.25rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0;
  }
  & > button {
    text-transform: uppercase;
  }
`;

export const WrapperSocialNetworks = styled.div`
  a {
    color: black;
  }
`;

export const AmountCollected = styled(BaseAmountCollected)`
  font-weight: normal;
  color: ${({ theme }) => theme.palette.gray.dark};
`;

export const AmountSubtitle = styled(BaseAmountSubtitle)`
  color: ${({ theme }) => theme.palette.white.main};
`;

export const Percentage = styled(BasePercentage)`
  color: ${({ theme }) => theme.palette.black.main};
`;
