import styled from "styled-components";
import {
  Container as BaseContainer,
  Title as BaseTitle,
  Text as BaseText,
} from "@/components";

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)}em;
`;

export const Title = styled(BaseTitle)`
  text-align: center;
  margin-top: 0;
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-weight: 400;
  margin-bottom: 0.5em;
`;

export const Text = styled(BaseText)`
  text-align: center;
`;
