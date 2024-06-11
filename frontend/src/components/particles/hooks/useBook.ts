import { useCallback, useEffect, useState } from "react";

import {
  Book,
  useBooksLazyQuery,
} from "@components/particles/graphql/generated/graphql";

interface ReadingListBook extends Book {
  id: number;
}

const useBook = () => {
  const [getAllBooks, { loading: fetchBooksLoading }] = useBooksLazyQuery();

  const [books, setBooks] = useState<Book[]>([]);
  const [addBookLoading, setAddBookLoading] = useState<boolean | undefined>();
  const [removeBookLoading, setRemoveBookLoading] = useState<
    boolean | undefined
  >();
  const [readingList, setReadingList] = useState<ReadingListBook[] | null>(
    null,
  );

  const fetchBooks = useCallback(async () => {
    try {
      const response = await getAllBooks();
      const books = response?.data?.books;
      setBooks(books as any);
    } catch (error) {
      // do nothing
    }
  }, [getAllBooks, setBooks]);

  const addBookToReadingList = async (book: Book) => {
    setAddBookLoading(true);

    const readingListLength = readingList?.length;

    setReadingList((currentReadingList) => [
      ...((currentReadingList || []) as ReadingListBook[]),
      {
        ...book,
        id: readingListLength ? readingListLength + 1 : 1,
      },
    ]);

    setAddBookLoading(false);
  };

  const removeBookFromReadingList = (id: number) => {
    setRemoveBookLoading(true);

    setReadingList((currentReadingList) =>
      currentReadingList
        ? currentReadingList.filter((book) => book.id !== id)
        : null,
    );

    setRemoveBookLoading(false);
  };

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
