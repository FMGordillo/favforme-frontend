import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  max-width: 1024px;
  margin-bottom: 1em;
  text-align: center;
  border-collapse: collapse;
  border-bottom: 3px solid ${({ theme }) => theme.palette.primary.main};
`;

export const THead = styled.thead`
  color: white;
  background-color: ${({ theme }) => theme.palette.primary.main};
  tr > td {
    padding: 0.25em;
  }
`;

export const TBody = styled.tbody``;

export const TableColumn = styled.td`
  border-left: 3px solid ${({ theme }) => theme.palette.primary.main};
  border-right: 3px solid ${({ theme }) => theme.palette.primary.main};

  :first-of-type {
    border-left-width: 6px;
  }
  :last-of-type {
    border-right-width: 6px;
  }
`;

export const TableRow = styled.tr``;
