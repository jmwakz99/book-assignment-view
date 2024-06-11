import { Close, Delete } from "@mui/icons-material";
import { Avatar, Button as MUIButton } from "@mui/material";
import { FC } from "react";

import classes from "./index.module.css";

const Icons = {
  close: <Close />,
  delete: <Delete />,
};

interface ButtonProps {
  label?: string;
  buttonType: "icon-button" | "button";
  onClick?: () => void;
  loading?: boolean;
  icon?: "close" | "delete";
  testId?: string;
}

const Button: FC<ButtonProps> = ({
  label,
  buttonType,
  onClick,
  loading,
  icon,
  testId,
}) => {
  if (buttonType === "icon-button") {
    return (
      <MUIButton
        size="small"
        variant="text"
        onClick={onClick}
        data-testid={testId}
        disabled={loading}
        className={classes.btn}
      >
        <Avatar
          style={{ height: "30px", width: "30px" }}
          className={classes.avatar}
        >
          {Icons[icon as "close" | "delete"]}
        </Avatar>
      </MUIButton>
    );
  }
  return (
    <MUIButton
      variant="contained"
      size="small"
      onClick={onClick}
      data-testid={testId}
      disabled={loading}
    >
      {loading ? "Loading..." : label}
    </MUIButton>
  );
};

export default Button;
