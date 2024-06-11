import { Close } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { FC } from "react";

import { BookWithAdditionalProperties } from "@components/particles/types/book";
import classes from "./index.module.css";

interface BookItemProps {
  book: BookWithAdditionalProperties;
  direction: "vertical" | "horizontal";
  onAddBook?: (book: BookWithAdditionalProperties) => void;
  onDeleteBook?: (id: number) => void;
  deleteLoading?: boolean;
  addLoading?: boolean;
}

const BookItem: FC<BookItemProps> = ({
  book,
  direction,
  onAddBook,
  onDeleteBook,
  addLoading,
  deleteLoading,
}) => {
  if (direction === "horizontal") {
    return (
      <ListItem
        secondaryAction={
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              onAddBook && onAddBook(book as BookWithAdditionalProperties)
            }
            data-testid="add-button"
            disabled={addLoading}
          >
            {addLoading ? "Adding..." : "Read"}
          </Button>
        }
        className={classes["horizontal-book-item"]}
        alignItems="center"
      >
        <ListItemAvatar>
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
        size="small"
        variant="text"
        onClick={() => onDeleteBook && onDeleteBook(book?.id as number)}
        data-testid="delete-button"
        disabled={deleteLoading}
      >
        <Avatar
          style={{ height: "30px", width: "30px" }}
          className={classes.avatar}
        >
          <Close style={{ fontSize: "16px" }} />
        </Avatar>
      </Button>
    </Box>
  );
};

export default BookItem;
