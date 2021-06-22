import styled from "styled-components";

export const FormFieldContainer = styled.div`
  display: grid;
  width: 100%;
  padding-bottom: 1em;
`;

export const BaseField = styled.input`
  border: 1px solid ${({ theme }) => theme.palette.gray.dark};
  border-radius: 16px;
  padding: 4px 8px;
  max-width: 420px;
  justify-self: center;
`;

export const BaseErrorMessage = styled.span`
  color: ${({ theme }) => theme.palette.error};
`;
