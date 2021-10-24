import styled from "styled-components";

export const Embla = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0;
  min-width: 670px;
  margin-left: auto;
  margin-right: auto;
  user-select: none;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-width: 100%;
  }
`;

export const EmblaContainer = styled.div`
  display: flex;
`;

export const EmblaSlide = styled.div`
  position: relative;
  flex: 0 0 100%;
  cursor: grab;
  height: 450px;

  &:active {
    cursor: grabbing;
  }
`;

export enum BUTTON_TYPE {
  PREV,
  NEXT,
}
export const EmblaButton = styled.button<{ action: BUTTON_TYPE }>`
  position: absolute;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  fill: #1bcacd;
  padding: 0;

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }

  ${({ action }) =>
    action === BUTTON_TYPE.PREV ? "left: 27px" : "right: 27px"};
`;

type ArrowIconProps = {
  scale?: number;
};

export const ArrowLeft = styled.i<ArrowIconProps>`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid;
  transform: scale(${({ scale }) => scale ?? 1});
  border-radius: 22px;

  ::after,
  ::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 4px;
  }

  ::after {
    width: 6px;
    height: 6px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    bottom: 6px;
  }

  ::before {
    width: 10px;
    height: 2px;
    bottom: 8px;
    background: currentColor;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

export const ArrowRight = styled.i<ArrowIconProps>`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid;
  transform: scale(${({ scale }) => scale ?? 1});
  border-radius: 20px;

  ::after,
  ::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    right: 4px;
  }

  ::after {
    width: 6px;
    height: 6px;
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    bottom: 6px;
  }

  ::before {
    width: 10px;
    height: 2px;
    bottom: 8px;
    background: currentColor;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
