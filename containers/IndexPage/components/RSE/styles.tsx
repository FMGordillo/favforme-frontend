import styled from "styled-components";
import { ButtonLink } from "@/components";

export const Container = styled.section`
  display: grid;
  grid-gap: 4em;
  grid-template-columns: 1fr 1fr;
  padding: ${({ theme }) => Number(theme.spacing(2)) * 8}px 0;
  background-color: ${({ theme }) => theme.palette.gray.light};

  p {
    line-height: 1.75em;
    max-width: 400px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0;

    .text {
      text-align: center;
      justify-self: center;
    }
  }
`;

export const ImageContainer = styled.div`
  align-self: center;
  justify-self: right;
  ${({ theme }) => theme.breakpoints.down("md")} {
    justify-self: center;
  }
`;

export const Button = styled(ButtonLink)`
  display: block;
  width: 170px;
`;
