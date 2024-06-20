export interface PositionType {
  style: { left: number; top: number };
  type: "top" | "bottom";
}

export const getPosition = (
  ref: React.RefObject<HTMLSpanElement>,
  gap = 5
): PositionType => {
  const rect = ref.current?.getBoundingClientRect() || {
    top: 0,
    left: 0,
    height: 0,
  };
  const h = ref.current?.clientHeight || 0;
  const isAbove = rect.top + h / 2 <= window.innerHeight / 2;
  const top = rect.top + (isAbove ? h + gap : -gap);

  return {
    style: { left: rect.left, top },
    type: isAbove ? "bottom" : "top",
  };
};
