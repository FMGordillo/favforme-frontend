import styled from "styled-components";

export const Toggle = styled.label`
  cursor: pointer;
  display: inline-block;
  &:hover {
    background: linear-gradient(to bottom, #fff 0%, #fff 100%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  }
  &:before {
    background: linear-gradient(to bottom, #fff 0%, #fff 100%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  }
`;

export const ToggleSwitch = styled.div`
  display: inline-block;
  background: #ccc;
  border-radius: 16px;
  width: 58px;
  height: 32px;
  position: relative;
  vertical-align: middle;
  transition: background 0.25s;
  &:before,
  &:after {
    content: "";
  }
  &:before {
    display: block;
    background: linear-gradient(to bottom, #fff 0%, #eee 100%);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    width: 24px;
    height: 24px;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: left 0.25s;
  }
`;

export const ToggleCheckbox = styled.input`
  position: absolute;
  visibility: hidden;
  background: ${({ theme }) => theme.palette.primary.main};
  &:before {
    left: 30px;
  }
  &:checked + ${ToggleSwitch} {
    background: ${({ theme }) => theme.palette.primary.main};
    &:before {
      left: 30px;
    }
  }
`;

export const ToggleLabel = styled.label`
  margin-left: 5px;
  position: relative;
  top: 2px;
`;
