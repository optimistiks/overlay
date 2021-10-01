import React from "react";
import { render, screen } from "@testing-library/react";
import { Overlay } from "./Overlay";

test("renders learn react link", () => {
  render(<Overlay />);
  const el = screen.getByText(/hello world/i);
  expect(el).toBeInTheDocument();
});
