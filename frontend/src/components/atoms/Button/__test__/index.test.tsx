import { render, screen } from "@testing-library/react";

import Button from "..";

test("Should render correctly", () => {
  render(<Button label="Test label" buttonType="button" />);
  expect(screen.getByText("Test label")).toBeInTheDocument();
});

test("Should disable button when loading is true", () => {
  render(<Button label="Test label" buttonType="button" loading />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
