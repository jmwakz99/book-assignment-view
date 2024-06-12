import { Box } from "@mui/material";
import { FC } from "react";

import { BookWithAdditionalProperties } from "@components/particles/types/book";
import BookSearch from "components/molecules/BookSearch";
import classes from "./index.module.css";

interface HeaderProps {
  books: BookWithAdditionalProperties[];
  onAddBook?: (book: BookWithAdditionalProperties) => void;
  addLoading?: boolean;
}

const Header: FC<HeaderProps> = ({ books, onAddBook, addLoading }) => {
  return (
    <Box className={classes["header-container"]}>
      <Box className={classes["book-search"]}>
        <BookSearch
          books={books}
          onAddBook={onAddBook}
          addLoading={addLoading}
        />
      </Box>
    </Box>
  );
};

export default Header;
