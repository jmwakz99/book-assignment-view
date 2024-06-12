import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";

import { getBooksMock } from "components/particles/__mocks__/graphql/book";
import BookAssignmentTemplate from "..";

test("Should render correctly", async () => {
  const books = [
    {
      added: true,
      title: "Book title 1",
      coverPhotoURL: "https://picsum.photos/200/300",
      author: "Author name",
    },
  ];

  render(
    <MockedProvider mocks={[getBooksMock]} addTypename={false}>
      <BookAssignmentTemplate
        books={books}
        readingList={books}
        onAddBook={jest.fn()}
        addLoading={false}
        onDeleteBook={jest.fn()}
        deleteLoading={false}
      />
    </MockedProvider>,
  );

  expect(await screen.findByText("Book title 1")).toBeInTheDocument();
});
