import { Form as BaseForm } from "formik";
import styled from "styled-components";

export const Form = styled(BaseForm)`
  & > * {
    padding-bottom: 32px;
  }
`;
