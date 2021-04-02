import styled from "styled-components";
import { Title } from "@/components";

export const StyledTitle = styled(Title)`
  text-align: center;
`;
export const ActionContainer = styled.div`
  max-width: 960px;
  margin: 4em auto;
`;
export const JoinUsContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
