import { Status } from "@/lib/context";
import styled from "styled-components";

export const Container = styled.div<{
  show: boolean;
  status: Status | undefined;
}>`
  display: grid;
  z-index: 1050;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 1em;
  margin: 1em auto;
  min-width: 150px;
  max-width: 250px;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.palette.gray.main};
  background-color: ${({ status }) => {
    switch (status) {
      case "success":
        return "#d4edda";
      case "error":
        return "#f8d7da";
      case "info":
        return "#d1ecf1";
      default:
        return "#cce5ff";
    }
  }};
  transition: all 300ms;

  &.hide {
    transform: translateY(150%);
  }
  &.show {
    transform: translateY(0);
  }
`;

export const Message = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  & > :last-child:hover {
    cursor: pointer;
  }
`;
