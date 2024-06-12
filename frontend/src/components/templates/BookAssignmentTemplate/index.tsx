import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";

import BookItem from "components/molecules/BookItem";
import Header from "components/organisms/Header";
import { BookWithAdditionalProperties } from "components/particles/types/book";
import classes from "./index.module.css";

interface BookAssignmentTemplateProps {
  books: BookWithAdditionalProperties[];
  readingList?: BookWithAdditionalProperties[];
  onAddBook: (book: BookWithAdditionalProperties) => void;
  addLoading: boolean;
  onDeleteBook: (book: BookWithAdditionalProperties) => void;
  deleteLoading: boolean;
}

const BookAssignmentTemplate: FC<BookAssignmentTemplateProps> = ({
  books,
  onAddBook,
  addLoading,
  onDeleteBook,
  deleteLoading,
  readingList = [],
}) => {
  return (
    <>
      <Header onAddBook={onAddBook} addLoading={addLoading} books={books} />
      <Box className={classes["book-list"]}>
        <Typography component="h4">Currently reading</Typography>
        <Grid container>
          {!Boolean(readingList.length) && (
            <Grid item xs={6} sm={3} md={4} mt="16px">
              Your list is empty.
            </Grid>
          )}
          {readingList.map((book) => (
            <Grid item xs={6} sm={3} md={4} key={book.title} mt="16px">
              <BookItem
                book={book}
                direction="vertical"
                onDeleteBook={() => onDeleteBook(book)}
                deleteLoading={deleteLoading}
                icon="close"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default BookAssignmentTemplate;
