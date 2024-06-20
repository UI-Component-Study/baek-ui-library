import { styled, css } from "styled-components";
import { TooltipBoxProps } from "./type";

const TooltipBox = ({ message, style, type }: TooltipBoxProps) => {
  console.log(style);

  return (
    <TooltipBoxContainer type={type} style={style}>
      {message}
    </TooltipBoxContainer>
  );
};

const TooltipBoxContainer = styled.div<{
  style: { left: number; top: number };
  type: string;
}>`
  position: absolute;
  width: 8rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  line-height: 16px;
  border-radius: 4px;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
  }

  ${(props) =>
    props.type === "top" &&
    css`
      transform: translate(calc(-50% + 12px), -100%);

      &:after {
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 7px solid #333;
      }
    `}

  ${(props) =>
    props.type === "bottom" &&
    css`
      transform: translate(calc(-50% + 12px), 0);

      &:after {
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #333;
      }
    `}
`;

export default TooltipBox;
