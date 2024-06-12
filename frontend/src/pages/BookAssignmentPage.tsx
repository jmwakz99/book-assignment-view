import { BookContext } from "@components/particles/context/bookContext";
import BookAssignmentTemplate from "@components/templates/BookAssignmentTemplate";
import { useContext } from "react";

const BookAssignmentPage = () => {
  const {
    books,
    readingList,
    addBookToReadingList,
    removeBookFromReadingList,
    removeBookLoading,
    addBookLoading,
  } = useContext(BookContext);

  return (
    <BookAssignmentTemplate
      books={books || []}
      readingList={readingList || []}
      onAddBook={addBookToReadingList}
      onDeleteBook={removeBookFromReadingList}
      deleteLoading={removeBookLoading as boolean}
      addLoading={addBookLoading as boolean}
    />
  );
};

export default BookAssignmentPage;
