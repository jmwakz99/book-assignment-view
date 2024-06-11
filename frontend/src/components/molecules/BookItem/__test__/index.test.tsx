import { fireEvent, render, screen } from "@testing-library/react";

import BookItem from "..";

test("Should render book item", () => {
  const book = {
    id: 1,
    title: "Book title",
    coverPhotoURL: "https://picsum.photos/200/300",
    author: "Author name",
  };

  render(<BookItem book={book} direction="vertical" />);

  expect(screen.getByTestId("delete-button")).toBeInTheDocument();
  expect(screen.getByText("Book title")).toBeInTheDocument();
});

test("Should remove book item when delete button is clicked", () => {
  const onDeleteBook = jest.fn();
  const book = {
    id: 1,
    title: "Book title",
    coverPhotoURL: "https://picsum.photos/200/300",
    author: "Author name",
  };

  render(
    <BookItem book={book} direction="vertical" onDeleteBook={onDeleteBook} />,
  );

  const deleteButton = screen.getByTestId("delete-button");

  fireEvent.click(deleteButton);

  expect(onDeleteBook).toBeCalledWith(book.id);
});

test("Should add book item when add button is clicked", () => {
  const onAddBook = jest.fn();
  const book = {
    id: 1,
    title: "Book title",
    coverPhotoURL: "https://picsum.photos/200/300",
    author: "Author name",
  };

  render(
    <BookItem book={book} direction="vertical" onDeleteBook={onAddBook} />,
  );

  const addButton = screen.getByTestId("add-button");

  fireEvent.click(addButton);

  expect(onAddBook).toBeCalledWith(book);
});
