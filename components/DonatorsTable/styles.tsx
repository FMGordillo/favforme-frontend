import styled from "styled-components";

export const Table = styled.table`
  width: 100%;

  text-align: center;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  color: white;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const TBody = styled.tbody`
  border-left: 4px solid;
  border-right: 4px solid;
  border-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.palette.primary.main},
      white
    )
    1 100%;
`;

export const TableColumn = styled.td``;

export const TableRow = styled.tr``;
