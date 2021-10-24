import { Button as BaseButton } from "@/components/Button"; // FIXME: BuG!
import { Title as BaseTitle } from "../styles";
import styled from "styled-components";

export const Container = styled.div<{ carousel?: boolean | undefined }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 2em;
  box-shadow: 1em 1em ${({ carousel }) => (carousel ? "#4963d3" : "#dcdcdc")};
  background: ${({ theme }) => theme.palette.gray.light};
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding-bottom: 1em;
  }
`;

export const Button = styled(BaseButton)`
  margin: 1em 0;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr;
`;

export const MainContent = styled.div`
  margin: 1em 0;
  padding-right: 1em;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0 1em;
  }
`;

/**
 * @description Styled from Title (h1)
 */
export const Title = styled(BaseTitle)`
  font-size: 2.25em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 0.25em;
  margin-bottom: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  transition: all 300ms;
  :hover {
    text-decoration: underline;
  }
`;

/**
 * @description Styled from h2
 */
export const AmountCollected = styled.h2`
  font-weight: 500;
  font-size: 2.25em;
  margin: 0;
`;

export const AmountSubtitle = styled.p`
  color: ${({ theme }) => theme.palette.gray.dark};
  margin-top: 0;
`;

export const Percentage = styled.p`
  color: green;
  margin: 0;
  font-size: 1.25em;
  font-weight: bold;
`;

/**
 * @description Progress bar container (needs a \<progress\>)
 */
export const ProgressBar = styled.div`
  progress[value] {
    background-color: transparent;
    width: 350px;
    appearance: none;
    height: 12px;

    border: 2px solid ${({ theme }) => theme.palette.gray.dark};

    ::-webkit-progress-bar {
      background-color: transparent;
      width: 350px;
      appearance: none;
      height: 8px;
    }

    ::-webkit-progress-value {
      background-color: ${({ theme }) => theme.palette.gray.main};
    }

    ::-moz-progress-bar {
      background-color: ${({ theme }) => theme.palette.gray.main};
    }

    ${({ theme }) => theme.breakpoints.down("md")} {
      /* width: 180px; */
      ::-webkit-progress-bar {
        /* width: 180px; */
      }
    }

    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: 180px;
      ::-webkit-progress-bar {
        width: 180px;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img.action:hover {
    cursor: pointer;
  }
`;

export const DueDate = styled.p<{
  show?: boolean;
  urgency?: "meh" | "medium" | "high" | undefined;
}>`
  display: ${({ show }) => (show ? "grid" : "none")};
  padding: 0.5em 1.25em;
  border: 1px solid ${({ theme }) => theme.palette.gray.main};
  border-radius: 3em;
  background-color: white;
  font-weight: bold;
  text-transform: uppercase;

  z-index: 2;
  position: absolute;
  right: 0;
  margin-right: 0.5em;

  color: ${({ theme, urgency = "meh" }) =>
    urgency === "high" ? "red" : theme.palette.gray.dark};
`;

export const ODS = styled.div`
  position: absolute;
  bottom: 0;
  height: 85px; /* Igual a la imagen */
  z-index: 2;
  align-self: flex-end;
  background: white;
`;
