import { render, screen } from "@testing-library/react";

import BookAssignmentTemplate from "..";

test("Should render correctly", () => {
  const books = [
    {
      id: 1,
      title: "Book title 1",
      coverPhotoURL: "https://picsum.photos/200/300",
      author: "Author name",
    },
  ];

  render(
    <BookAssignmentTemplate
      books={books}
      onAddBook={jest.fn()}
      addLoading={false}
      onDeleteBook={jest.fn()}
      deleteLoading={false}
    />,
  );

  expect(screen.getByText("Book title 1")).toBeInTheDocument();
});
