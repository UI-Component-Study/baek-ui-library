import { useRef, useState } from "react";
import { PositionType, getPosition } from "./tooltip";
import styled from "styled-components";
import { TooltipContainerProps } from "./type";
import TooltipPortal from "./TooltipPortal";
import TooltipBox from "./TooltipContent";

const TooltipPortalContainer = ({
  children,
  message,
  className,
}: TooltipContainerProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const position = useRef<PositionType | null>(null);

  const handleMouseOver = () => {
    position.current = getPosition(ref);
    setShow(true);
  };
  return (
    <TooltipContainer
      ref={ref}
      onMouseOver={handleMouseOver}
      onMouseOut={() => setShow(false)}
      className={className}
    >
      {children}
      {show && (
        <TooltipPortal>
          <TooltipBox
            message={message}
            style={position.current?.style}
            type={position.current?.type}
          />
        </TooltipPortal>
      )}
    </TooltipContainer>
  );
};

const TooltipContainer = styled.span`
  position: relative;
  display: inline-block;
`;

export default TooltipPortalContainer;
