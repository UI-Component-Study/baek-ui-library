import TooltipPortalContainer from "@/components/Tooltip/TooltipPortalContainer";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TooltipPortalContainer> = {
  title: "Tooltip",
  component: TooltipPortalContainer,
  args: {
    message: "hi",
    className: "home",
  },
} satisfies Meta<typeof TooltipPortalContainer>;

export default meta;

type TooltipStory = StoryObj<typeof meta>;

export const Default: TooltipStory = {
  args: {
    children: <span>Hover over me</span>,
  },
};
