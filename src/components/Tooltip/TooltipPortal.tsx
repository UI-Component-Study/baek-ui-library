import { TooltipPortalProps } from "./type";
import ReactDOM from "react-dom";

const TooltipPortal = ({ children }: TooltipPortalProps) => {
  const totalRoot = document.getElementById("tooltip-root");
  return totalRoot ? ReactDOM.createPortal(children, totalRoot) : null;
};

export default TooltipPortal;
