import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: "select",
        options: ["icon-button", "button"],
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonType: "button",
    label: "Button",
  },
};

export const IconButton: Story = {
  args: {
    buttonType: "icon-button",
    icon: "close",
  },
};

export const Loading: Story = {
  args: {
    buttonType: "button",
    label: "Button",
    loading: true,
  },
};

export default meta;
