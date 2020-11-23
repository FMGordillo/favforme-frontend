import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  color: {
    primary: "#5573f5",
    secondary: "#f38d9f",
  },
};

export type Theme = typeof theme;
export default baseStyled as ThemedStyledInterface<Theme>;
