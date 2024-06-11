import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FC } from "react";
import { themeDefault } from "./themeDefault";

const theme = createTheme({
  ...themeDefault,
});

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <main>{children}</main>
  </ThemeProvider>
);

export default ThemeWrapper;
