import { render, screen } from "@testing-library/react";

import Header from "..";

test("Should render correctly", () => {
  const books = [
    {
      id: 1,
      title: "Book title 1",
      coverPhotoURL: "https://picsum.photos/200/300",
      author: "Author name 1",
    },
  ];

  render(<Header books={books} />);
  expect(screen.getByPlaceholderText("Search by title...")).toBeInTheDocument();
});
