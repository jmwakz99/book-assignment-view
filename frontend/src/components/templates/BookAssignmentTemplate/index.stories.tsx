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
        id: 1,
        title: "Book title 1",
        coverPhotoURL: "https://picsum.photos/200/300",
        author: "Author name",
      },
      {
        id: 2,
        title: "Book title 2",
        coverPhotoURL: "https://picsum.photos/200/300",
        author: "Author name",
      },
      {
        id: 3,
        title: "Book title 3",
        coverPhotoURL: "https://picsum.photos/200/300",
        author: "Author name",
      },
    ],
    onAddBook: (book: BookWithAdditionalProperties) => console.log(book),
    addLoading: false,
    onDeleteBook: (id: number) => console.log(id),
  },
};

export default meta;
