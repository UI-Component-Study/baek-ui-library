import { useState } from "react";
import { TooltipProps } from "./type";

const Tooltip = ({ children, text, position }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {children}
      <span>{text}</span>
    </div>
  );
};

export default Tooltip;
