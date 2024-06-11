import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";

import { BookWithAdditionalProperties } from "@components/particles/types/book";
import BookItem from "../BookItem";

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
        <TextField {...params} placeholder="Search by title..." />
      )}
      getOptionLabel={(option: any) => option.title}
      options={books || []}
      renderOption={(props, option: BookWithAdditionalProperties) => (
        <BookItem
          key={option.id}
          book={option}
          direction="horizontal"
          onAddBook={onAddBook}
          addLoading={addLoading}
        />
      )}
    />
  );
};

export default BookSearch;
