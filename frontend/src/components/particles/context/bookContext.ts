import { createContext } from "react";

import { BookWithAdditionalProperties } from "../types/book";

export const BookContext = createContext({
  fetchBooks: () => {},
  books: [],
  readingList: [],
  addBookToReadingList: (book: BookWithAdditionalProperties) => {},
  removeBookFromReadingList: (book: BookWithAdditionalProperties) => {},
  fetchBooksLoading: false,
  removeBookLoading: false,
  addBookLoading: false,
});
