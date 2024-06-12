import { useCallback, useEffect, useState } from "react";

import { useBooksLazyQuery } from "@components/particles/graphql/generated/graphql";
import { BookWithAdditionalProperties } from "../types/book";

const useBook = () => {
  const [getAllBooks, { loading: fetchBooksLoading }] = useBooksLazyQuery();

  const [books, setBooks] = useState<BookWithAdditionalProperties[]>([]);
  const [addBookLoading, setAddBookLoading] = useState<boolean | undefined>();
  const [removeBookLoading, setRemoveBookLoading] = useState<
    boolean | undefined
  >();

  const fetchBooks = useCallback(async () => {
    try {
      const response = await getAllBooks();
      const books = response?.data?.books;
      setBooks(books as any);
    } catch (error) {
      // do nothing
    }
  }, [getAllBooks, setBooks]);

  const addBookToReadingList = (book: BookWithAdditionalProperties) => {
    setAddBookLoading(true);

    const allBooks = [...books];
    const bookIndex = allBooks.findIndex((b) => b.title === book.title);
    allBooks[bookIndex] = {
      ...book,
      added: true,
    };
    setBooks(allBooks);

    setAddBookLoading(false);
  };

  const removeBookFromReadingList = (book: BookWithAdditionalProperties) => {
    setRemoveBookLoading(true);

    const allBooks = [...books];
    const bookIndex = allBooks.findIndex((b) => b.title === book.title);
    allBooks[bookIndex] = {
      ...allBooks[bookIndex],
      added: false,
    };
    setBooks(allBooks);

    setRemoveBookLoading(false);
  };

  const readingList = books.filter((book) => book.added);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return {
    books,
    readingList,
    addBookToReadingList,
    removeBookFromReadingList,
    fetchBooksLoading,
    addBookLoading,
    removeBookLoading,
  };
};

export default useBook;
