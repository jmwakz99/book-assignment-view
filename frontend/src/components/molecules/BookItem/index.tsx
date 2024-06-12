import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { FC } from "react";

import Button from "components/atoms/Button";
import { BookWithAdditionalProperties } from "components/particles/types/book";
import classes from "./index.module.css";

interface BookItemProps {
  book: BookWithAdditionalProperties;
  direction: "vertical" | "horizontal";
  onAddBook?: (book: BookWithAdditionalProperties) => void;
  onDeleteBook?: (id: number) => void;
  deleteLoading?: boolean;
  addLoading?: boolean;
  icon?: "close" | "delete";
}

const BookItem: FC<BookItemProps> = ({
  book,
  direction,
  onAddBook,
  onDeleteBook,
  addLoading,
  deleteLoading,
  icon,
}) => {
  if (direction === "horizontal") {
    return (
      <ListItem
        secondaryAction={
          <Button
            buttonType="button"
            onClick={() => onAddBook && onAddBook(book)}
            loading={addLoading}
            label="Read"
            testId="add-button"
          />
        }
        className={classes["horizontal-book-item"]}
        alignItems="center"
      >
        <ListItemAvatar
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Avatar
            variant="square"
            alt={book?.title as string}
            src={book?.coverPhotoURL as string}
            className={classes.avatar}
          />
        </ListItemAvatar>
        <Box style={{ marginLeft: "5px" }}>
          <Typography component="h4">{book?.title}</Typography>
          <Typography component="p">
            by <span>{book?.author}</span>
          </Typography>
        </Box>
      </ListItem>
    );
  }

  return (
    <Box className={classes.shelf}>
      <Box className={classes["book-ui"]}>
        <Box className={`${classes["cover"]} ${classes["front"]}`}>
          <Typography component="h4">{book?.title}</Typography>
          <figure>
            <img
              src={book?.coverPhotoURL as string}
              alt={book?.title as string}
            />
          </figure>
        </Box>
        <Box className={classes.pages}>
          <Box>
            <Box className={classes.open}>by {book?.author}</Box>
          </Box>
        </Box>
        <Box className={`${classes["cover"]} ${classes["back"]}`}></Box>
      </Box>
      <Button
        buttonType="icon-button"
        onClick={() => onDeleteBook && onDeleteBook(book?.id as number)}
        testId="delete-button"
        loading={deleteLoading}
        icon={icon}
      />
    </Box>
  );
};

export default BookItem;
