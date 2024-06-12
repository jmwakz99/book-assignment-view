import { Autocomplete, Box, TextField } from "@mui/material";
import { FC } from "react";

import { BookWithAdditionalProperties } from "components/particles/types/book";
import BookItem from "../BookItem";
import classes from "./index.module.css";

interface BookSearchProps {
  books: BookWithAdditionalProperties[];
  onAddBook?: (book: BookWithAdditionalProperties) => void;
  addLoading?: boolean;
}

const BookSearch: FC<BookSearchProps> = ({ books, onAddBook, addLoading }) => {
  return (
    <Autocomplete
      freeSolo
      disablePortal
      renderInput={(params) => (
        <TextField
          className={classes["input-search"]}
          {...params}
          placeholder="Search by title..."
        />
      )}
      getOptionLabel={(option: any) => option.title}
      options={books || []}
      renderOption={(props, option: BookWithAdditionalProperties) => (
        <Box style={{ margin: "1rem auto", width: "95%" }}>
          <BookItem
            key={option.title}
            book={option}
            direction="horizontal"
            onAddBook={onAddBook}
            addLoading={addLoading}
          />
        </Box>
      )}
    />
  );
};

export default BookSearch;
