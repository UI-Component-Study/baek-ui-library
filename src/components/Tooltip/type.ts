export interface TooltipContainerProps {
  message: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export interface TooltipPortalProps {
  children: React.ReactNode;
}

export interface TooltipBoxProps {
  message: string;
  style?: { left: number; top: number };
  type?: string;
}
