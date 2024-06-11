import { DocumentNode } from "graphql";

import {
  BooksDocument,
  BooksQuery,
  BooksQueryVariables,
} from "@components/particles/graphql/generated/graphql";

export const getBooksMock: {
  request: {
    query: DocumentNode;
    variables: BooksQueryVariables;
  };
  result: { data: BooksQuery };
} = {
  request: {
    query: BooksDocument,
    variables: {},
  },
  result: {
    data: {
      books: [
        {
          __typename: "Book",
          author: "<NAME>",
          coverPhotoURL: "https://picsum.photos/200/300",
          title: "Book title",
        },
      ],
    },
  },
};
