import { Meta, StoryObj } from "@storybook/react";

import BookItem from ".";

const meta: Meta<typeof BookItem> = {
  title: "Molecules/BookItem",
  component: BookItem,
  argTypes: {
    direction: {
      control: {
        type: "select",
        options: ["vertical", "horizontal"],
        defaultValue: "vertical",
      },
    },
    onDeleteBook: { action: "onDeleteBook" },
    onAddBook: { action: "onAddBook" },
    addLoading: { control: { type: "boolean" } },
    deleteLoading: { control: { type: "boolean" } },
    icon: {
      control: {
        type: "select",
        options: ["close", "delete"],
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: "vertical",
    book: {
      id: 1,
      title: "Book title",
      coverPhotoURL: "https://picsum.photos/200/300",
      author: "Author name",
    },
  },
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    book: {
      id: 1,
      title: "Book title",
      coverPhotoURL: "https://picsum.photos/200/300",
      author: "Author name",
    },
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    book: {
      id: 1,
      title: "Book title",
      coverPhotoURL: "https://picsum.photos/200/300",
      author: "Author name",
    },
    icon: "close",
  },
};

export default meta;
