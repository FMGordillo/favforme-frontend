import { Container as BaseContainer } from "@/components";
import { calculateBreakpoint } from "@/utils/styled";
import styled from "styled-components";

export const Container = styled(BaseContainer)<{ hasData?: boolean }>`
  display: grid;
  align-items: center;
  justify-items: center;
  max-width: 1024px;
  ${({ hasData }) => hasData && `box-shadow: 1em 1em #4963d3;`}
`;

export const Section = styled.div<{ active?: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
  min-width: ${calculateBreakpoint("md")};
  ${({ theme }) => theme.breakpoints.down("md")} {
    min-width: auto;
  }
`;
