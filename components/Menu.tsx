import { Children, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface MenuProps {
  open?: boolean;
  children?: ReactNode;
  toggleContainer?: ReactNode;
}

// TODO: Mover /styles
const StyledContainer = styled.div`
  background: white;
`;

// TODO: Mover /styles
// TODO: Mejorar esto, por el amor a jebus.
const StyledMenu = styled.ul<{ open?: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  right: 0;
  padding: 0;
  list-style: none;
  text-align: right;
`;

export const Menu: FunctionComponent<MenuProps> = ({
  open,
  children,
  toggleContainer,
}) => {
  const childrenMap = Children.map(children, (child) => <li>{child}</li>);

  return (
    <StyledContainer>
      {toggleContainer}
      <StyledMenu open={!!open}>{childrenMap?.map((c) => c)}</StyledMenu>
    </StyledContainer>
  );
};
