import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";

import { BookContext } from "@components/particles/context/bookContext";
import useBook from "components/particles/hooks/useBook";
import { routes } from "components/particles/routes";
import "components/particles/styles/global.css";

const router = createBrowserRouter([...routes]);

const App = () => {
  const {
    books,
    readingList,
    addBookToReadingList,
    removeBookFromReadingList,
    fetchBooksLoading,
    addBookLoading,
    removeBookLoading,
  } = useBook();

  const values = useMemo(() => {
    return {
      books,
      readingList,
      addBookToReadingList,
      removeBookFromReadingList,
      fetchBooksLoading,
      addBookLoading,
      removeBookLoading,
    };
  }, [
    books,
    readingList,
    addBookToReadingList,
    fetchBooksLoading,
    addBookLoading,
    removeBookLoading,
    removeBookFromReadingList,
  ]);

  if (fetchBooksLoading || fetchBooksLoading === undefined) {
    return (
      <GridLoader
        loading
        size={20}
        color="#28b8b8"
        aria-label="Loading Spinner"
        cssOverride={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  }

  return (
    <>
      <BookContext.Provider value={values as any}>
        <RouterProvider router={router} />
      </BookContext.Provider>
    </>
  );
};

export default App;
