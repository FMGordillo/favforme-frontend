import { Status } from "@/lib/context";
import styled from "styled-components";

export const Container = styled.div<{
  show: boolean;
  status: Status | undefined;
}>`
  display: ${({ show }) => (show ? "grid" : "none")};
  z-index: 1050;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1em;
  margin: 1em;
  min-width: 150px;
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
`;

export const Message = styled.span`
  text-align: right;
`;
