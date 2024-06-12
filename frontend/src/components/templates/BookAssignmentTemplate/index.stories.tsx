import { Meta, StoryObj } from "@storybook/react/*";

import { BookWithAdditionalProperties } from "components/particles/types/book";
import BookAssignmentTemplate from ".";

const meta: Meta<typeof BookAssignmentTemplate> = {
  title: "templates/BookAssignmentTemplate",
  component: BookAssignmentTemplate,
  argTypes: {
    onAddBook: { action: "onAddBook" },
    addLoading: { control: { type: "boolean" } },
    books: {
      control: {
        type: "object",
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    books: [
      {
        added: false,
        title: "Book title 1",
        coverPhotoURL: "https://picsum.photos/200/300",
        author: "Author name",
      },
      {
        added: false,
        title: "Book title 2",
        coverPhotoURL: "https://picsum.photos/200/300",
        author: "Author name",
      },
      {
        added: true,
        title: "Book title 3",
        coverPhotoURL: "https://picsum.photos/200/300",
        author: "Author name",
      },
    ],
    onAddBook: (book: BookWithAdditionalProperties) => undefined,
    addLoading: false,
    onDeleteBook: (book: BookWithAdditionalProperties) => undefined,
  },
};

export default meta;
