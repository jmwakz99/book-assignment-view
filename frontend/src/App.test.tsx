import { render, screen } from "@testing-library/react";

import App from "App";

test("should display Hello world!", () => {
  render(<App />);

  expect(screen.getByText("Hello world!")).toBeInTheDocument();
});
