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
