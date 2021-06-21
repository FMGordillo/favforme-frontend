import styled from "styled-components";

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BaseField = styled.input`
  border: 1px solid ${({ theme }) => theme.palette.gray.dark};
  border-radius: 16px;
  padding: 4px 8px;
`;

export const BaseErrorMessage = styled.span`
  color: ${({ theme }) => theme.palette.error};
`;
