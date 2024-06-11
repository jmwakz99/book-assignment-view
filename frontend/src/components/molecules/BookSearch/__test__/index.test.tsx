import { fireEvent, render, screen } from "@testing-library/react";

import BookSearch from "..";

test("Should display the correct searched book ", () => {
  const books = [
    {
      id: 1,
      title: "Book title 1",
      coverPhotoURL: "https://picsum.photos/200/300",
      author: "Author name 1",
    },
    {
      id: 2,
      title: "Book title 2",
      coverPhotoURL: "https://picsum.photos/200/300",
      author: "Author name 2",
    },
  ];

  render(<BookSearch books={books} />);

  const input = screen.getByPlaceholderText("Search by title...");

  fireEvent.change(input, { target: { value: "Book title 2" } });
  expect(screen.getByText("Author name 2")).toBeInTheDocument();
});
